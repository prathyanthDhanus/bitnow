import { useMemo } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

import RootLayout from "@/layouts/RootLayout";

const LandingPage = lazy(() => import("@/pages/index"));

export const useRouter = () => {
  return useMemo(() => {
    return createBrowserRouter([
      {
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <LandingPage />
              </Suspense>
            ),
          },
        ],
      },
    ]);
  }, []);
};
