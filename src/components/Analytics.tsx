import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import { initAnalytics, trackPageView } from "@/lib/analytics";

export function Analytics() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(path);
  }, [path]);

  return null;
}
