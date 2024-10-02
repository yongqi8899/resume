import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { memo, lazy, Suspense } from "react";
import { RootLayout } from "@/layout";
const ErrorPage = lazy(() => import("@/pages/error-page"));
const Home = lazy(() => import("@/pages/home"));
const Contact = lazy(() => import("@/pages/contact"));
const Skills = lazy(() => import("@/pages/skills"));
const Projects = lazy(() => import("@/pages/projects"));

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
