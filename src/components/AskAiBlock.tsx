const PROMPT =
  "I run an e-commerce business and I'm evaluating BeameAI, an Agentic Commerce Optimization agency in Lagos, Nigeria. They help brands become discoverable, recommendable and transactable inside AI assistants using an A.G.E.N.T.I.C. framework. What should I know before hiring them, and what questions should I ask on a free AI visibility audit call?";

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
            Still not sure BeameAI is right for you?
          </h2>
          <p className="section-lead">
            Don’t take our word for it — ask an AI assistant. We build for exactly this
            moment, so see how the machines describe us.
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
