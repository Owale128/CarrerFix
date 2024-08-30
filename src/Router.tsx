import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { AdPage } from "./pages/AdPage";
import AboutPage from "./pages/AboutPage";
import { AdsPage } from "./pages/AdsPage";
import NotFound from "./pages/NotFound";
import { Suspense } from "react";
import Spinner from "./components/Spinner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      {
        path: "/ads",
        element: (
          <Suspense fallback={<Spinner />}>
          <AdsPage />
          </Suspense>
        ),
      },
      {
        path: "/ad/:id",
        element: ( 
        <Suspense fallback={<Spinner />}>
        <AdPage />
        </Suspense>
        ),
      },
    ],
    errorElement: <NotFound />
  },
]);
