import { useEffect, useState } from "react";

import expertAvatar from "@/assets/expert-avatar.png";

const BOT_ID = "75f76610-4010-4847-aec0-3bbcd202fba6";

type BotpressClient = {
  init: (config: Record<string, unknown>) => void;
  open: () => void;
  close: () => void;
  on?: (event: string, handler: () => void) => void;
};

declare global {
  interface Window {
    botpress?: BotpressClient;
  }
}

export function ExpertChat() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      const bp = window.botpress;
      if (cancelled || !bp) return;
      bp.on?.("webchat:ready", () => !cancelled && setReady(true));
      bp.init({
        botId: BOT_ID,
        clientId: BOT_ID,
        selector: "#beame-webchat",
        configuration: {
          botName: "Beame Expert",
          botDescription: "Beame.ng AI expert — instant answers, 24/7",
          botAvatar: `${window.location.origin}${expertAvatar}`,
          composerPlaceholder: "Ask our expert anything…",
          color: "#E22733",
          variant: "solid",
          themeMode: "light",
          fontFamily: "inter",
          radius: 1.5,
          showPoweredBy: false,
        },
      });
      setReady(true);
    };

    if (window.botpress) {
      init();
      return () => {
        cancelled = true;
      };
    }

    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2/inject.js";
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, []);

  const toggle = () => {
    const bp = window.botpress;
    if (!bp) return;
    if (open) bp.close();
    else bp.open();
    setOpen((v) => !v);
  };

  return (
    <>
      <div
        id="beame-webchat"
        aria-hidden={!open}
        className={`fixed bottom-28 right-5 z-[10000] transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      />
      <div className="fixed bottom-5 right-5 z-[10000] flex items-center gap-3">

      {!open && (
        <span className="hidden rounded-full bg-card px-3.5 py-2 text-sm font-semibold text-foreground shadow-lg ring-1 ring-border sm:inline-flex">
          Chat with a Beame expert
        </span>
      )}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Close expert chat" : "Chat with a Beame expert"}
        disabled={!ready}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-primary shadow-xl ring-4 ring-primary/15 transition-transform hover:scale-105 disabled:opacity-70"
      >
        <img
          src={expertAvatar}
          alt="Beame.ng support expert"
          width={512}
          height={512}
          loading="lazy"
          className="h-14 w-14 rounded-full bg-card object-cover"
        />
        {ready && !open && (
          <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-card" />
        )}
      </button>
      </div>
    </>
  );
}

