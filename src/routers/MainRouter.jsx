import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingComponent from "../components/LoadingComponent";

const Main = lazy(() => import("../pages/MainPage"));
const Layout = lazy(() => import("../pages/layout/LayoutPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Support = lazy(() => import("../pages/SupportPage.jsx"));
const Exchange = lazy(() => import("../pages/ExchangePage.jsx"));
const Download = lazy(() => import("../pages/DownloadPage.jsx"));

const Loading = <LoadingComponent />;

const mainRouter = createHashRouter([

  {
    path: "/login",
    element: (
        <Suspense fallback={Loading}>
          <Login />
        </Suspense>
    ),
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={Loading}>
            <Main />
          </Suspense>
        ),
      },

      {
        path: "/support",
        element: (
            <Suspense fallback={Loading}>
              <Support />
            </Suspense>
        ),
      },
      {
        path: "/exchange",
        element: (
            <Suspense fallback={Loading}>
              <Exchange />
            </Suspense>
        ),
      },
      {
        path: "/download",
        element: (
            <Suspense fallback={Loading}>
              <Download />
            </Suspense>
        ),
      },
    ],
  },
]);

export default mainRouter;
