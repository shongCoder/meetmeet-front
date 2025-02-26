import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingComponent from "../components/LoadingComponent";

const Main = lazy(() => import("../pages/MainPage"));
const Layout = lazy(() => import("../pages/layout/LayoutPage"));
const Login = lazy(() => import("../pages/LoginPage"));

const Loading = <LoadingComponent />;

const mainRouter = createBrowserRouter([
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
        path: "/login",
        element: (
          <Suspense fallback={Loading}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>, // Fallback 경로
  },
]);

export default mainRouter;
