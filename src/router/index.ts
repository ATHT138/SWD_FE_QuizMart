import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const MainLayout = lazy(() => import("@/components/layout"));

const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [],
  },
]);

export default routes;
