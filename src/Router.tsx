import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import AdsPage from "./pages/AdsPage";
import { AdPage } from "./pages/AdPage";
import AboutPage from "./pages/AboutPage";

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
        element: <AdsPage />,
      },
      {
        path: "/ad/:id",
        element: <AdPage />,
      },
    ],
  },
]);
