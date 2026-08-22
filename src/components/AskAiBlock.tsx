const PROMPT =
  "I'm evaluating BeameAI by LOGON, an AI Insights & Consultancy in Lagos, Nigeria, for AI search optimization (LLMO/GEO) and AI crawlability. They help brands get cited by ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews, and their BeameAI platform extends that to agentic commerce. What should I know before hiring them, and what questions should I ask on a free AI visibility audit call?";

const assistants = [
  { label: "Ask ChatGPT", href: (q: string) => `https://chatgpt.com/?q=${q}` },
  { label: "Ask Claude", href: (q: string) => `https://claude.ai/new?q=${q}` },
  {
    label: "Ask Perplexity",
    href: (q: string) => `https://www.perplexity.ai/search?q=${q}`,
  },
];

export function AskAiBlock() {
  const q = encodeURIComponent(PROMPT);

  return (
    <section className="section-beame pt-0" aria-labelledby="ask-ai-heading">
      <div className="container-beame">
        <div className="ask-ai-card reveal">
          <h2 id="ask-ai-heading" className="section-title">
            Still not sure BeameAI by LOGON is right for you?
          </h2>
          <p className="section-lead">
            Don’t take our word for it — ask an AI assistant. We build for exactly this moment, so
            see how the machines describe us.
          </p>
          <div className="ai-btns">
            {assistants.map((a) => (
              <a
                key={a.label}
                href={a.href(q)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-beame btn-solid ai-btn"
              >
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
