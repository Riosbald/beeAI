import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

function WaveMark() {
  return (
    <svg
      className="foot-wave"
      viewBox="0 0 64 24"
      role="img"
      aria-label="Beame.ng waveform mark"
    >
      {[4, 12, 20, 28, 36, 44, 52, 60].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={12 - [5, 9, 3, 11, 7, 10, 4, 8][i]!}
          width="4"
          height={[10, 18, 6, 22, 14, 20, 8, 16][i]!}
          rx="2"
        />
      ))}
    </svg>
  );
}

const socials = [
  { label: "Beame.ng on X", href: "https://x.com", Icon: Twitter },
  { label: "Beame.ng on LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Beame.ng on YouTube", href: "https://youtube.com", Icon: Youtube },
  { label: "Beame.ng on GitHub", href: "https://github.com", Icon: Github },
];

export function SiteFooter() {
  return (
    <footer className="footer-beame">
      <div className="container-beame">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-wordmark">
              <WaveMark />
              <span>Beame.ng</span>
            </div>
            <p className="footer-tagline">
              Agentic Commerce Optimization — discoverable, recommendable,
              transactable.
            </p>
          </div>

          <nav className="footer-col" aria-label="Company">
            <h2 className="footer-heading">Company</h2>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/protocols">Protocol Tracker</Link>
          </nav>

          <nav className="footer-col" aria-label="Resources">
            <h2 className="footer-heading">Resources</h2>
            <Link to="/" hash="insights">
              Blog
            </Link>
            <Link to="/services" hash="faq">
              FAQs
            </Link>
            <Link to="/" hash="framework">
              Framework
            </Link>
          </nav>

          <div className="footer-col">
            <h2 className="footer-heading">Connect</h2>
            <Link to="/" hash="audit">
              Book a free audit
            </Link>
            <ul className="footer-socials">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-legal">
          <p>© {new Date().getFullYear()} Beame.ng — Lagos, Nigeria</p>
          <div className="footer-legal-links">
            <Link to="/about">Privacy</Link>
            <Link to="/about">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
