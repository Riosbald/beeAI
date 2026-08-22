import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  { label: "BeameAI on X", href: "https://x.com", Icon: Twitter },
  {
    label: "Oluwamayowalogo on LinkedIn",
    href: "https://www.linkedin.com/in/oluwamayowa",
    Icon: Linkedin,
  },
  { label: "BeameAI on YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "BeameAI on GitHub", href: "https://github.com", Icon: Github },
];

export function SiteFooter() {
  return (
    <footer className="footer-beame">
      <div className="container-beame">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-wordmark">
              <Link to="/" className="footer-brand-text" aria-label="BeameAI by LOGON — home">
                <span>
                  beame<span className="footer-brand-ai">AI</span>
                </span>
                <span className="footer-brand-suffix">by LOGON</span>
              </Link>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-80">
              A LOGON company · Lagos, Nigeria
            </p>
            <p className="footer-tagline">
              BeameAI by LOGON — AI search (LLMO/GEO), crawlability, entity graphs and agentic
              commerce for African and global enterprises.
            </p>
          </div>

          <nav className="footer-col" aria-label="Company">
            <h2 className="footer-heading">Company</h2>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/protocols">Protocol Tracker</Link>
            <a href="/sitemap.xml">Sitemap</a>
          </nav>

          <nav className="footer-col" aria-label="Resources">
            <h2 className="footer-heading">Resources</h2>
            <Link to="/insights">Insights</Link>
            <Link to="/ai-crawlability">AI Crawlability</Link>
            <Link to="/services" hash="faq">
              FAQs
            </Link>
            <Link to="/" hash="framework">
              Framework
            </Link>
          </nav>

          <nav className="footer-col" aria-label="Machine files">
            <h2 className="footer-heading">For AI crawlers</h2>
            <a href="/llms.txt">llms.txt</a>
            <a href="/robots.txt">robots.txt</a>
            <a href="/insights.txt">insights.txt</a>
            <a href="/about.txt">about.txt</a>
            <a href="/services.txt">services.txt</a>
          </nav>

          <div className="footer-col">
            <h2 className="footer-heading">Connect</h2>
            <Link to="/" hash="audit" className="footer-cta">
              Book a free AI Visibility Audit
            </Link>
            <a href="mailto:hello@beameai.ng" className="footer-email">
              hello@beameai.ng
            </a>
            <ul className="footer-socials">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <p>© {new Date().getFullYear()} BeameAI by LOGON — Lagos, Nigeria</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
