import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "../ui-component/Loadable";

const PagesLanding = Loadable(lazy(() => import("../views/pages/landing")));

export default function ThemeRoutes() {
  return useRoutes([{ path: "/", element: <PagesLanding /> }]);
}
