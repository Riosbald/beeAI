import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { streamGatewayText } from "./ai-assist.server";

const Input = z.object({
  category: z.string().min(1).max(80),
  categoryBrief: z.string().min(1).max(600),
  mode: z.enum(["generate", "refine"]),
  draft: z.string().max(2000).optional(),
  tone: z.enum(["plain", "bold", "technical"]).default("plain"),
});

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
      "You write marketing copy snippets for BeameAI, an Agentic Commerce Optimization agency that makes brands discoverable, recommendable and transactable inside AI assistants.",
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
