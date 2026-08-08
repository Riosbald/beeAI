import { useEffect, useState } from "react";

import expertAvatar from "@/assets/expert-avatar.png";

const BOT_ID = "75f76610-4010-4847-aec0-3bbcd202fba6";

declare global {
  interface Window {
    botpressWebChat?: {
      init: (config: Record<string, unknown>) => void;
      sendEvent: (event: Record<string, unknown>) => void;
    };
  }
}

export function ExpertChat() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.botpressWebChat) return;
      window.botpressWebChat.init({
        botId: BOT_ID,
        clientId: BOT_ID,
        hostUrl: "https://cdn.botpress.cloud/webchat/v2",
        messagingUrl: "https://messaging.botpress.cloud",
        webhookId: "6f1e2da0-a98a-43c6-a84d-7fc8cfda2b2f",
        botName: "Beame Expert",
        botAvatarUrl: `${window.location.origin}${expertAvatar}`,
        botConversationDescription: "Beame.ng AI expert — replies in seconds, 24/7",
        composerPlaceholder: "Ask our expert anything…",
        lazySocket: true,
        showPoweredBy: false,
        hideWidget: true,
        useSessionStorage: true,
        enableConversationDeletion: true,
        showConversationsButton: false,
        stylesheet:
          "https://webchat-styler-css.botpress.app/prod/code/1a4d0b5b-4b8f-4f2f-8a2f-000000000000/v31752/style.css",
        themeName: "prism",
        frontendVersion: "v2",
        theme: "prism",
        themeColor: "#E22733",
      });
      setReady(true);
    };

    if (window.botpressWebChat) {
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
    if (!window.botpressWebChat) return;
    window.botpressWebChat.sendEvent({ type: open ? "hide" : "show" });
    setOpen((v) => !v);
  };

  return (
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
  );
}
