import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { comRoutes } from "./comRoutes";
import { corpRoutes } from "./corpRoutes";
import SharedElements from "@/pages/SharedElements";
import { regRoutes } from "./regRoutes";

export const routes = createBrowserRouter([
  ...comRoutes,
  ...corpRoutes,
  ...regRoutes,
  {
    path: "/shared-elements",
    element: <SharedElements />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
