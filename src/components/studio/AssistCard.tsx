import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { assistCopy } from "@/lib/ai-assist.functions";

type Tone = "plain" | "bold" | "technical";

const tones: { id: Tone; label: string }[] = [
  { id: "plain", label: "Plain" },
  { id: "bold", label: "Bold" },
  { id: "technical", label: "Technical" },
];

export function AssistCard({
  category,
  categoryBrief,
}: {
  category: string;
  categoryBrief: string;
}) {
  const run = useServerFn(assistCopy);
  const [tone, setTone] = useState<Tone>("plain");
  const [result, setResult] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handle(mode: "generate" | "refine") {
    setPending(true);
    setError(null);
    setCopied(false);
    try {
      const res = await run({
        data: {
          category,
          categoryBrief,
          mode,
          tone,
          ...(mode === "refine" ? { draft: result } : {}),
        },
      });
      setResult(res.text);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Try again.");
    } finally {
      setPending(false);
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
    } catch {
      setError("Couldn't copy to the clipboard.");
    }
  }

  return (
    <article className="assist-card">
      <header className="assist-head">
        <span className="snip-dot" aria-hidden="true" />
        ai-assist · {category.toLowerCase()}
      </header>

      <div className="assist-body">
        <div className="assist-tones" role="group" aria-label="Tone">
          {tones.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`assist-tone${tone === t.id ? " is-active" : ""}`}
              aria-pressed={tone === t.id}
              onClick={() => setTone(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="assist-actions">
          <button
            type="button"
            className="assist-btn is-primary"
            onClick={() => handle("generate")}
            disabled={pending}
          >
            {pending ? "Writing…" : result ? "Regenerate" : "Generate snippet"}
          </button>
          <button
            type="button"
            className="assist-btn"
            onClick={() => handle("refine")}
            disabled={pending || !result}
          >
            Refine
          </button>
        </div>

        <div className="assist-out" aria-live="polite" aria-busy={pending}>
          {error ? (
            <p className="assist-error">{error}</p>
          ) : result ? (
            <p className="assist-text">{result}</p>
          ) : (
            <p className="assist-empty">
              Pick a capability above, choose a tone, and generate a copy snippet for it.
            </p>
          )}
        </div>

        {result && !error ? (
          <button type="button" className="assist-copy" onClick={copy}>
            {copied ? "Copied" : "Copy snippet"}
          </button>
        ) : null}
      </div>
    </article>
  );
}
