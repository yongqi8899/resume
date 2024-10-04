import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { memo, lazy, Suspense } from "react";
import { RootLayout } from "@/layout";
const ErrorPage = lazy(() => import("@/pages/error-page"));
const Home = lazy(() => import("@/components/page-home/index.jsx"));
const Contact = lazy(() => import("@/components/page-contact/index.jsx"));
const Skills = lazy(() => import("@/components/page-skills/index.jsx"));
const Projects = lazy(() => import("@/components/page-projects/index.jsx"));

import Loading from "@/components/Loading.jsx";

const App = memo(() => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "/skills",
          element: (
            <Suspense fallback={<Loading />}>
              <Skills />
            </Suspense>
          ),
        },
        {
          path: "/projects",
          element: (
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
});
export default App;
