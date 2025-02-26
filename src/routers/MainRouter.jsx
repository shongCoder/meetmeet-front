import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingComponent from "../components/LoadingComponent";

const Main = lazy(() => import("../pages/MainPage"));
const Layout = lazy(() => import("../pages/layout/LayoutPage"));
const Login = lazy(() => import("../pages/LoginPage"));

const Loading = <LoadingComponent />;

const mainRouter = createHashRouter([
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
]);

export default mainRouter;
