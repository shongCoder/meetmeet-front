import { createHashRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingComponent from "../components/LoadingComponent";
import ScrollToTop from "../components/common/ScrollToTop.jsx";

const Main = lazy(() => import("../pages/MainPage"));
const Layout = lazy(() => import("../pages/layout/LayoutPage"));
const LayoutAuth = lazy(() => import("../pages/layout/LayoutAuthPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Support = lazy(() => import("../pages/SupportPage.jsx"));
const Exchange = lazy(() => import("../pages/ExchangePage.jsx"));
const Download = lazy(() => import("../pages/DownloadPage.jsx"));
const Influencer = lazy(() => import("../pages/InfluencerPage.jsx"));
const Notice = lazy(() => import("../pages/NoticePage.jsx"));
const Privacy = lazy(() => import("../pages/PrivacyPage.jsx"));
const Operating = lazy(() => import("../pages/OperatingPage.jsx"));
const Temrs = lazy(() => import("../pages/TermsPage.jsx"));

const Loading = <LoadingComponent />;

const mainRouter = createHashRouter([


    {
    element: (
        <>
            <ScrollToTop />
            <Layout />
        </>

    ),
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
        path: "/download",
        element: (
            <Suspense fallback={Loading}>
              <Download />
            </Suspense>
        ),
      },
    ],
    },
    {
        element: (
            <>
                <ScrollToTop />
                <LayoutAuth />
            </>

        ),
        children: [
            {
                path: "/login",
                element: (
                    <Suspense fallback={Loading}>
                        <Login />
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
                path: "/influencer",
                element: (
                    <Suspense fallback={Loading}>
                        <Influencer />
                    </Suspense>
                ),
            },
            {
                path: "/notice-detail",
                element: (
                    <Suspense fallback={Loading}>
                        <Notice />
                    </Suspense>
                )
            },
            {
                path: "/privacy",
                element: (
                    <Suspense fallback={Loading}>
                        <Privacy />
                    </Suspense>
                )
            },
            {
                path: "/operating",
                element: (
                    <Suspense fallback={Loading}>
                        <Operating />
                    </Suspense>
                )
            },
            {
                path: "/terms",
                element: (
                    <Suspense fallback={Loading}>
                        <Temrs />
                    </Suspense>
                )
            }

        ],
    },
]);

export default mainRouter;
