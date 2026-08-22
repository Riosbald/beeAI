import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import KineticDotsLoader from "@/components/KineticDotsLoader";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Global loading UX: every route shows the chamfer kinetic loader during
    // client-side transitions that take longer than 120ms, held for at least
    // 200ms so it never flickers. Routes with a specific pendingComponent
    // (insights hub + article) override this with contextual labels.
    defaultPendingComponent: () => (
      <div className="flex min-h-[50vh] items-center justify-center">
        <KineticDotsLoader label="Loading page" />
      </div>
    ),
    defaultPendingMs: 120,
    defaultPendingMinMs: 200,
  });

  return router;
};
