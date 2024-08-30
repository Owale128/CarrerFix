import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";

import { AdPage } from "./pages/AdPage";
import { AdsPage } from "./pages/AdsPage";

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
