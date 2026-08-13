# Remix of Remix of Remix of Sparkling Red Designs

Kindly design and implement : Worked for 15s



Here is an upgraded styles.css and script.js that follows the same polished, card-based, motion-rich feel from the framework, while keeping your brand red and white.



styles.css



/* ================================

   BEAME.NG BRAND SYSTEM

   Red + White Visual Language

================================== */



:root {

  --primary: #E22733;

  --primary-dark: #C81E2E;

  --primary-soft: rgba(226, 39, 51, 0.08);

  --white: #FFFFFF;

  --off-white: #FFF7F8;

  --surface: #FFFFFF;

  --surface-2: #FFF1F2;

  --text: #2B2B2B;

  --muted: #6B6B6B;

  --border: rgba(226, 39, 51, 0.12);

  --shadow-sm: 0 10px 25px rgba(0, 0, 0, 0.06);

  --shadow-md: 0 18px 50px rgba(0, 0, 0, 0.10);

  --shadow-red: 0 0 0 10px rgba(226, 39, 51, 0.10);

  --radius-lg: 24px;

  --radius-md: 18px;

  --radius-sm: 12px;

  --container: 1180px;

  --transition: 300ms ease;

  --transition-slow: 500ms ease;

  --font-body: "Sofia", "Inter", Arial, sans-serif;

  --font-display: "Faro", "Poppins", Georgia, serif;

}



* {

  margin: 0;

  padding: 0;

  box-sizing: border-box;

}



html {

  scroll-behavior: smooth;

}



body {

  font-family: var(--font-body);

  background:

    radial-gradient(circle at top left, rgba(226, 39, 51, 0.08), transparent 28%),

    radial-gradient(circle at top right, rgba(226, 39, 51, 0.06), transparent 24%),

    linear-gradient(180deg, #ffffff 0%, var(--off-white) 100%);

  color: var(--text);

  line-height: 1.65;

  overflow-x: hidden;

  opacity: 0;

  transform: translateY(10px);

  transition: opacity var(--transition-slow), transform var(--transition-slow);

}



body.is-loaded {

  opacity: 1;

  transform: translateY(0);

}



img,

video,

iframe {

  max-width: 100%;

  display: block;

}



a {

  color: inherit;

  text-decoration: none;

}



button,

input,

textarea {

  font: inherit;

}



ul {

  list-style: none;

}



.container {

  width: min(var(--container), calc(100% - 32px));

  margin-inline: auto;

}



header {

  position: sticky;

  top: 0;

  z-index: 50;

  background: rgba(255, 255, 255, 0.78);

  backdrop-filter: blur(16px);

  border-bottom: 1px solid rgba(226, 39, 51, 0.08);

  transition: box-shadow var(--transition), background var(--transition);

}



header.scrolled {

  box-shadow: var(--shadow-sm);

  background: rgba(255, 255, 255, 0.92);

}



header .container {

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 14px 0;

}



#logo {

  width: 150px;

  height: auto;

  object-fit: contain;

  transition: transform var(--transition), filter var(--transition);

}



#logo:hover {

  transform: scale(1.03);

  filter: drop-shadow(0 10px 20px rgba(226, 39, 51, 0.18));

}



.hero {

  position: relative;

  padding: 96px 0 84px;

  background:

    linear-gradient(135deg, rgba(226, 39, 51, 0.98), rgba(199, 30, 46, 0.96)),

    radial-gradient(circle at top, rgba(255, 255, 255, 0.14), transparent 35%);

  color: var(--white);

  overflow: hidden;

}



.hero::before {

  content: "";

  position: absolute;

  inset: 0;

  background:

    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.18), transparent 22%),

    radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.12), transparent 20%),

    radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.10), transparent 24%);

  pointer-events: none;

}



.hero .container {

  position: relative;

  text-align: center;

  max-width: 860px;

}



.hero h1 {

  font-family: var(--font-display);

  font-size: clamp(2.2rem, 5vw, 4.25rem);

  line-height: 1.02;

  letter-spacing: -0.04em;

  margin-bottom: 18px;

}



.hero p {

  font-size: clamp(1rem, 1.8vw, 1.15rem);

  color: rgba(255, 255, 255, 0.92);

  max-width: 720px;

  margin: 0 auto 30px;

}



.hero-badge {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 8px 14px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.16);

  border: 1px solid rgba(255, 255, 255, 0.22);

  color: #fff;

  font-size: 0.92rem;

  margin-bottom: 18px;

  backdrop-filter: blur(12px);

}



.btn,

.chatbot-section a,

.cta .btn {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  border: 0;

  cursor: pointer;

  border-radius: 999px;

  padding: 14px 22px;

  font-weight: 700;

  transition:

    transform var(--transition),

    box-shadow var(--transition),

    background var(--transition),

    color var(--transition),

    border-color var(--transition),

    opacity var(--transition);

  will-change: transform;

}



.btn {

  background: var(--white);

  color: var(--primary);

  box-shadow: var(--shadow-sm);

  border: 1px solid rgba(255, 255, 255, 0.65);

}



.btn:hover {

  transform: translateY(-2px);

  box-shadow: var(--shadow-red);

  background: var(--off-white);

}



.services,

.special,

.cta,

.image-section,

.chatbot-section {

  padding: 72px 0;

}



.services {

  background: transparent;

}



.services h2,

.special h2,

.cta h2,

.image-section h2,

.chatbot-section h2 {

  font-family: var(--font-display);

  font-size: clamp(1.7rem, 3vw, 2.8rem);

  letter-spacing: -0.03em;

  margin-bottom: 18px;

  color: var(--text);

  text-align: center;

}



.section-lead,

.special p,

.image-section p,

.cta p,

footer p {

  color: var(--muted);

  font-size: 1rem;

}



.services-grid {

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 22px;

  margin-top: 28px;

}



.services-grid > div,

.image-section,

.special > .container,

.chatbot-section .container,

.cta .container {

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-sm);

}



.services-grid > div {

  padding: 18px;

  text-align: left;

  transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);

  position: relative;

  overflow: hidden;

}



.services-grid > div::after,

.image-section::after {

  content: "";

  position: absolute;

  inset: auto auto 0 0;

  width: 100%;

  height: 4px;

  background: linear-gradient(90deg, var(--primary), rgba(226, 39, 51, 0.15));

  transform: scaleX(0);

  transform-origin: left;

  transition: transform var(--transition-slow);

}



.services-grid > div:hover,

.image-section:hover {

  transform: translateY(-6px);

  box-shadow: var(--shadow-md);

  border-color: rgba(226, 39, 51, 0.22);

}



.services-grid > div:hover::after,

.image-section:hover::after {

  transform: scaleX(1);

}



.services-grid img,

.image-section img,

.image-section iframe {

  width: 100%;

  border-radius: 16px;

  object-fit: cover;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

}



.services-grid img {

  height: 180px;

  margin-bottom: 14px;

}



.services-grid h3 {

  font-size: 1.1rem;

  color: var(--primary);

  margin-bottom: 10px;

}



.services-grid p {

  color: var(--muted);

  font-size: 0.96rem;

}



.special .container,

.cta .container,

.chatbot-section .container {

  padding: 26px;

}



.special .container {

  position: relative;

  overflow: hidden;

}



.special .container::before {

  content: "";

  position: absolute;

  inset: auto -20% -35% auto;

  width: 240px;

  height: 240px;

  background: radial-gradient(circle, rgba(226, 39, 51, 0.14), transparent 65%);

  pointer-events: none;

}



.video-placeholder,

.image-section iframe {

  aspect-ratio: 16 / 9;

  width: 100%;

  border: 0;

  border-radius: 16px;

  margin: 18px 0;

}



.video-placeholder {

  display: grid;

  place-items: center;

  background:

    linear-gradient(135deg, rgba(226, 39, 51, 0.06), rgba(226, 39, 51, 0.02)),

    #ffffff;

  color: var(--primary);

  font-weight: 700;

  letter-spacing: 0.01em;

  min-height: 280px;

  border: 1px dashed rgba(226, 39, 51, 0.25);

}



.special ul {

  display: grid;

  gap: 14px;

  margin: 22px 0;

}



.special li {

  position: relative;

  padding: 14px 16px 14px 44px;

  background: var(--surface-2);

  border: 1px solid rgba(226, 39, 51, 0.10);

  border-radius: 16px;

  color: var(--text);

}



.special li::before {

  content: "✓";

  position: absolute;

  left: 16px;

  top: 14px;

  width: 20px;

  height: 20px;

  border-radius: 50%;

  display: grid;

  place-items: center;

  background: var(--primary);

  color: var(--white);

  font-size: 0.78rem;

}



blockquote {

  margin-top: 22px;

  padding: 18px 20px;

  border-left: 4px solid var(--primary);

  background: rgba(226, 39, 51, 0.04);

  border-radius: 0 16px 16px 0;

  font-style: italic;

  color: var(--text);

}



.image-section {

  position: relative;

  width: min(1180px, calc(100% - 32px));

  margin: 0 auto 22px;

  padding: 22px;

  text-align: center;

  overflow: hidden;

}



.image-section img {

  max-height: 360px;

  margin-bottom: 18px;

}



.image-section h2 {

  margin-bottom: 12px;

}



.cta {

  background:

    linear-gradient(180deg, rgba(226, 39, 51, 0.97), rgba(199, 30, 46, 0.97));

  color: var(--white);

  text-align: center;

}



.cta .container {

  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.16);

  backdrop-filter: blur(14px);

}



.cta h2,

.cta p {

  color: var(--white);

}



.cta .btn {

  background: var(--white);

  color: var(--primary);

  margin: 8px 8px 0;

}



.cta .btn:hover {

  background: var(--off-white);

  transform: translateY(-2px);

}



.chatbot-section {

  padding-top: 42px;

}



.chatbot-section .container {

  text-align: center;

}



.chatbot-links,

.messenger-links {

  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  gap: 14px;

  margin-top: 22px;

}



.chatbot-section a {

  background: var(--primary);

  color: var(--white);

  box-shadow: var(--shadow-sm);

  border: 1px solid rgba(226, 39, 51, 0.18);

}



.chatbot-section a:hover {

  background: var(--primary-dark);

  transform: translateY(-2px);

  box-shadow: var(--shadow-md);

}



footer {

  padding: 28px 0 34px;

  background: #1f1f1f;

  color: rgba(255, 255, 255, 0.88);

  text-align: center;

}



footer p + p {

  margin-top: 6px;

}



.reveal {

  opacity: 0;

  transform: translateY(24px) scale(0.985);

  transition:

    opacity 700ms ease,

    transform 700ms ease;

}



.reveal.is-visible {

  opacity: 1;

  transform: translateY(0) scale(1);

}



@media (max-width: 1100px) {

  .services-grid {

    grid-template-columns: repeat(2, minmax(0, 1fr));

  }

}



@media (max-width: 720px) {

  .hero {

    padding: 72px 0 64px;

  }



  .services,

  .special,

  .cta,

  .image-section,

  .chatbot-section {

    padding: 54px 0;

  }



  .services-grid {

    grid-template-columns: 1fr;

  }



  .services-grid > div {

    padding: 16px;

  }



  .image-section {

    width: calc(100% - 24px);

    padding: 16px;

  }



  .cta .btn,

  .btn,

  .chatbot-section a {

    width: 100%;

    max-width: 320px;

  }

}



@media (prefers-reduced-motion: reduce) {

  html {

    scroll-behavior: auto;

  }



  *,

  *::before,

  *::after {

    animation: none !important;

    transition: none !important;

    scroll-behavior: auto !important;

  }



  body {

    opacity: 1;

    transform: none;

  }



  .reveal {

    opacity: 1;

    transform: none;

  }

}



script.js



document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  const header = document.querySelector("header");

  const hero = document.querySelector(".hero");

  const revealTargets = document.querySelectorAll(

    "section, .services-grid > div, .image-section, .special .container, .cta .container, footer"

  );



  // Smooth entrance for the page

  requestAnimationFrame(() => {

    body.classList.add("is-loaded");

  });



  // Add reveal styling to visible blocks

  revealTargets.forEach((el) => el.classList.add("reveal"));



  // Intersection Observer for scroll animations

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

      (entries, obs) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("is-visible");

            obs.unobserve(entry.target);

          }

        });

      },

      {

        threshold: 0.16,

        rootMargin: "0px 0px -80px 0px",

      }

    );



    revealTargets.forEach((el) => observer.observe(el));

  } else {

    revealTargets.forEach((el) => el.classList.add("is-visible"));

  }



  // Sticky header shadow on scroll

  const updateHeaderState = () => {

    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 12);

  };



  updateHeaderState();

  window.addEventListener("scroll", updateHeaderState, { passive: true });



  // Subtle hero parallax for depth

  const handleHeroMotion = () => {

    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const y = window.scrollY * 0.12;

    hero.style.backgroundPosition = `center ${y}px`;

  };



  handleHeroMotion();

  window.addEventListener("scroll", handleHeroMotion, { passive: true });



  // Smooth scroll for internal anchors

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

      const targetId = anchor.getAttribute("href");

      if (!targetId || targetId === "#") return;



      const target = document.querySelector(targetId);

      if (!target) return;



      event.preventDefault();

      target.scrollIntoView({ behavior: "smooth", block: "start" });

    });

  });



  // Light lift effect on cards when hovered via pointer movement

  const cards = document.querySelectorAll(".services-grid > div, .image-section, .special .container, .cta .container");



  cards.forEach((card) => {

    let rafId = null;



    const resetTilt = () => {

      card.style.transform = "";

      card.style.boxShadow = "";

    };



    card.addEventListener("mousemove", (event) => {

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;



      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;

      const y = event.clientY - rect.top;



      const rotateX = ((y / rect.height) - 0.5) * -3;

      const rotateY = ((x / rect.width) - 0.5) * 3;



      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {

        card.style.transform = `translateY(-6px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      });

    });



    card.addEventListener("mouseleave", resetTilt);

    card.addEventListener("blur", resetTilt);

  });



  // Fade the logo slightly on scroll for a premium feel

  const logo = document.querySelector("#logo");

  if (logo) {

    window.addEventListener(

      "scroll",

      () => {

        const progress = Math.min(window.scrollY / 220, 1);

        logo.style.opacity = String(1 - progress * 0.18);

        logo.style.transform = `scale(${1 - progress * 0.03})`;

      },

      { passive: true }

    );

  }

});



To make the bot links look perfect with this CSS, place them inside a wrapper like .chatbot-links or .messenger-links, and give your main sections id="services", id="special", and id="contact" for cleaner scrolling.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ee5c8f64-5c69-471b-aacd-1340992d391a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
