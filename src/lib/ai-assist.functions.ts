import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  category: z.string().min(1).max(80),
  categoryBrief: z.string().min(1).max(600),
  mode: z.enum(["generate", "refine"]),
  draft: z.string().max(2000).optional(),
  tone: z.enum(["plain", "bold", "technical"]).default("plain"),
});

async function streamGatewayText(body: unknown, apiKey: string) {
  const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Lovable-API-Key": apiKey,
      "X-Lovable-AIG-SDK": "fetch",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok || !res.body) {
    const detail = await res.text().catch(() => "");
    if (res.status === 429)
      throw new Error("Too many requests right now — try again in a moment.");
    if (res.status === 402)
      throw new Error("AI credits are exhausted for this workspace.");
    throw new Error(detail || `AI request failed (${res.status}).`);
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let text = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) {
      if (!line.startsWith("data:")) continue;
      const payload = line.slice(5).trim();
      if (!payload || payload === "[DONE]") continue;
      try {
        const evt = JSON.parse(payload) as {
          type?: string;
          delta?: string;
          response?: { output_text?: string | string[] };
        };
        if (evt.type === "response.output_text.delta" && typeof evt.delta === "string") {
          text += evt.delta;
        } else if (evt.type === "response.completed" && !text) {
          const out = evt.response?.output_text;
          if (typeof out === "string") text = out;
          else if (Array.isArray(out)) text = out.join("");
        }
      } catch {
        // ignore keep-alive / partial frames
      }
    }
  }

  return text.trim();
}

export const assistCopy = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => Input.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured yet.");

    const toneLine = {
      plain: "Plain, confident and concrete. No hype words.",
      bold: "Punchy and declarative. Short sentences with strong verbs.",
      technical: "Precise and technical. Name mechanisms, formats and signals.",
    }[data.tone];

    const task =
      data.mode === "refine" && data.draft?.trim()
        ? `Refine this draft so it is sharper and shorter while keeping its meaning:\n\n"""${data.draft.trim()}"""`
        : "Write a fresh snippet from scratch.";

    const prompt = [
      "You write marketing copy snippets for Beame.ng, an Agentic Commerce Optimization agency that makes brands discoverable, recommendable and transactable inside AI assistants.",
      `Capability in focus: ${data.category}.`,
      `Context on that capability: ${data.categoryBrief}`,
      `Tone: ${toneLine}`,
      task,
      "Return 2 to 3 sentences of plain prose only — no headings, no bullet points, no quotes, no markdown, under 60 words.",
    ].join("\n\n");

    const text = await streamGatewayText(
      {
        model: "openai/gpt-5.6-sol",
        input: prompt,
        stream: true,
        reasoning: { effort: "low", summary: "auto" },
        include: ["reasoning.encrypted_content"],
        store: false,
      },
      apiKey,
    );

    if (!text) throw new Error("The model returned an empty snippet — try again.");
    return { text };
  });
