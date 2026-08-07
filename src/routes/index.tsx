import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import showcase from "@/assets/beame-showcase.jpg";
import serviceChatbot from "@/assets/service-chatbot.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSupport from "@/assets/service-support.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beame.ng — AI Chatbots & Automation for Nigerian Businesses" },
      {
        name: "description",
        content:
          "Beame.ng builds AI chatbots, WhatsApp and Messenger assistants, websites and automation that sell for you 24/7.",
      },
      {
        property: "og:title",
        content: "Beame.ng — AI Chatbots & Automation for Nigerian Businesses",
      },
      {
        property: "og:description",
        content:
          "AI chatbots, WhatsApp and Messenger assistants, websites and automation that sell for you 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    img: serviceChatbot,
    title: "AI Chatbots",
    body: "Trained on your business so every customer gets an instant, on-brand answer — day or night.",
  },
  {
    img: serviceAutomation,
    title: "Sales Automation",
    body: "Capture leads, follow up automatically and track what actually converts.",
  },
  {
    img: serviceWeb,
    title: "Websites & Apps",
    body: "Fast, mobile-first sites designed to turn visitors into paying customers.",
  },
  {
    img: serviceSupport,
    title: "Support Desk",
    body: "WhatsApp, Messenger and web chat in one place with human handover when it matters.",
  },
];

const reasons = [
  "Live in days, not months — we handle setup, training and launch.",
  "Built for Nigerian businesses: Naira pricing, local payment and delivery flows.",
  "Works where your customers already are — WhatsApp, Instagram and Messenger.",
  "Real humans on standby whenever the bot should hand over.",
];

function useReveal() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const targets = Array.from(el.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return root;
}

function useStickyHeader() {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      header.current?.classList.toggle("scrolled", window.scrollY > 12);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return header;
}

function Index() {
  const root = useReveal();
  const header = useStickyHeader();

  return (
    <div ref={root}>
      <header ref={header} className="site-header">
        <div className="container-beame flex items-center justify-between py-3.5">
          <a href="#top" className="brand-mark">
            beame<span className="text-foreground">.ng</span>
          </a>
          <nav className="hidden gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-primary">
              Services
            </a>
            <a href="#special" className="transition-colors hover:text-primary">
              Why Beame
            </a>
            <a href="#chatbots" className="transition-colors hover:text-primary">
              Chatbots
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-beame">
          <div className="container-beame relative mx-auto max-w-[860px] text-center">
            <span className="hero-badge reveal">● Now onboarding new businesses</span>
            <h1 className="reveal mt-5 text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.02]">
              AI that answers, sells and follows up — 24/7
            </h1>
            <p className="reveal mx-auto mt-4 max-w-[720px] text-[clamp(1rem,1.8vw,1.15rem)] opacity-95">
              Beame.ng builds smart chatbots, automation and websites that keep your
              business responding to every customer, on every channel, at any hour.
            </p>
            <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
              <a href="#chatbots" className="btn-beame">
                Talk to our bot
              </a>
              <a href="#contact" className="btn-beame">
                Book a free demo
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section-beame">
          <div className="container-beame">
            <h2 className="section-title reveal">What we build</h2>
            <p className="section-lead reveal">
              Everything you need to turn conversations into customers.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.title} className="card-beame reveal p-4.5">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="mb-3.5 h-[180px] w-full rounded-2xl object-cover"
                  />
                  <h3 className="mb-2 text-lg text-primary">{s.title}</h3>
                  <p className="text-[0.96rem] text-muted-foreground">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="special" className="section-beame pt-0">
          <div className="container-beame">
            <div className="card-beame reveal p-6 md:p-8">
              <h2 className="section-title">Why businesses choose Beame</h2>
              <ul className="mx-auto mt-6 grid max-w-[860px] gap-3.5">
                {reasons.map((r) => (
                  <li key={r} className="check-item">
                    {r}
                  </li>
                ))}
              </ul>
              <blockquote className="quote-beame mx-auto mt-6 max-w-[860px]">
                “Our WhatsApp used to go quiet after 6pm. Now Beame replies instantly and
                we close orders while we sleep.”
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section-beame pt-0">
          <div className="container-beame">
            <div className="card-beame reveal p-5 text-center md:p-6">
              <img
                src={showcase}
                alt="Team reviewing an AI chat assistant on a laptop"
                loading="lazy"
                width={1280}
                height={800}
                className="mx-auto mb-5 max-h-[360px] w-full rounded-2xl object-cover"
              />
              <h2 className="section-title">Built with you, not just for you</h2>
              <p className="section-lead">
                We map your customer journey, train the assistant on your real answers and
                stay on hand as your business grows.
              </p>
            </div>
          </div>
        </section>

        <section id="chatbots" className="section-beame pt-0">
          <div className="container-beame">
            <div className="card-beame reveal p-6 text-center md:p-8">
              <h2 className="section-title">Try our assistants</h2>
              <p className="section-lead">
                Say hello on the channel you prefer — the bot replies in seconds.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3.5">
                <a href="https://wa.me/2348000000000" className="btn-beame btn-solid">
                  WhatsApp bot
                </a>
                <a href="https://m.me/beame.ng" className="btn-beame btn-solid">
                  Messenger bot
                </a>
                <a href="https://instagram.com/beame.ng" className="btn-beame btn-solid">
                  Instagram DM
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="cta-beame section-beame">
          <div className="container-beame">
            <div className="cta-panel reveal">
              <h2 className="section-title text-[inherit]">
                Ready to never miss a customer again?
              </h2>
              <p className="section-lead text-[inherit] opacity-95">
                Book a free 20-minute demo and see your own assistant in action.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href="mailto:hello@beame.ng" className="btn-beame">
                  hello@beame.ng
                </a>
                <a href="tel:+2348000000000" className="btn-beame">
                  Call us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-beame">
        <div className="container-beame">
          <p>© {new Date().getFullYear()} Beame.ng — AI chatbots & automation.</p>
          <p className="mt-1.5 text-sm opacity-80">Lagos, Nigeria</p>
        </div>
      </footer>
    </div>
  );
}
