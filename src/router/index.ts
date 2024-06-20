import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import login from "../views/authentication_page/login/login";
import NotFound from "../views/error_page/NotFound";
const MainLayout = lazy(() => import("@/components/layout"));

const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {  },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
