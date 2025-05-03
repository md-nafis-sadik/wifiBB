import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { comRoutes } from "./comRoutes";
import { corpRoutes } from "./corpRoutes";
import SharedElements from "@/pages/SharedElements";

export const routes = createBrowserRouter([
  ...comRoutes,
  ...corpRoutes,
  {
    path: "/shared-elements",
    element: <SharedElements />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
