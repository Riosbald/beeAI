import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="footer-beame">
      <div className="container-beame">
        <p className="text-lg font-bold">Beame.ng</p>
        <p className="mt-1 text-sm opacity-80">
          Agentic Commerce Optimization — discoverable, recommendable, transactable.
        </p>
        <nav className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link to="/services" className="opacity-85 hover:opacity-100">
            Services
          </Link>
          <Link to="/about" className="opacity-85 hover:opacity-100">
            About Us
          </Link>
          <Link to="/protocols" className="opacity-85 hover:opacity-100">
            Protocol Tracker
          </Link>
          <Link to="/services" hash="faq" className="opacity-85 hover:opacity-100">
            FAQs
          </Link>
          <Link to="/" hash="insights" className="opacity-85 hover:opacity-100">
            Blog
          </Link>
          <Link to="/" hash="audit" className="opacity-85 hover:opacity-100">
            Contact
          </Link>
        </nav>
        <p className="mt-5 text-sm opacity-70">
          © {new Date().getFullYear()} Beame.ng — Kansas City, USA
        </p>
      </div>
    </footer>
  );
}
