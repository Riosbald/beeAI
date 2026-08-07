import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import showcase from "@/assets/beame-showcase.jpg";
import serviceFood from "@/assets/service-food.jpg";
import serviceGroceries from "@/assets/service-groceries.jpg";
import servicePharmacy from "@/assets/service-pharmacy.jpg";
import serviceRide from "@/assets/service-ride.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beame.ng — Logistics & Ride-Hailing in Ekiti State" },
      {
        name: "description",
        content:
          "Food, groceries and pharmacy delivery plus safe ride-hailing across Ekiti State — fast, friendly and powered by smart technology.",
      },
      {
        property: "og:title",
        content: "Beame.ng — Logistics & Ride-Hailing in Ekiti State",
      },
      {
        property: "og:description",
        content:
          "Food, groceries and pharmacy delivery plus safe ride-hailing across Ekiti State.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    img: serviceFood,
    title: "Food Delivery",
    body: "We're the bridge between your cravings and local restaurants, ensuring your meals arrive piping hot and right on time.",
  },
  {
    img: serviceGroceries,
    title: "Groceries Delivery",
    body: "Forget lugging heavy bags home. We'll bring the supermarket to your doorstep, giving you more time for the things you love.",
  },
  {
    img: servicePharmacy,
    title: "Pharmaceutical Delivery",
    body: "Need medication? We've got you covered. Quick, discreet and reliable — just what the doctor ordered.",
  },
  {
    img: serviceRide,
    title: "Ride-Hailing",
    body: "Commuting to work or heading out for the night, our drivers are ready to get you there safely and comfortably.",
  },
];

const reasons = [
  "Ekiti born and bred — we know every street, campus and market.",
  "Live tracking and honest Naira pricing with no hidden charges.",
  "Vetted riders and drivers, trained for safety and courtesy.",
  "Real humans on WhatsApp whenever you need a hand.",
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
            <a href="#order" className="transition-colors hover:text-primary">
              Order
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
            <span className="hero-badge reveal">● Now live across Ekiti State</span>
            <h1 className="reveal mt-5 text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.02]">
              Reimagining Logistics and Ride-Hailing in Ekiti State
            </h1>
            <p className="reveal mx-auto mt-4 max-w-[720px] text-[clamp(1rem,1.8vw,1.15rem)] opacity-95">
              Your friendly neighborhood problem-solvers, powered by smart technology and
              a passion for making life easier.
            </p>
            <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
              <a href="#order" className="btn-beame">
                Get Started
              </a>
              <a href="#contact" className="btn-beame">
                Talk to us
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section-beame">
          <div className="container-beame">
            <h2 className="section-title reveal">Our Services</h2>
            <p className="section-lead reveal">
              Deliveries and rides across Ado-Ekiti and beyond — fast, safe and friendly.
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
