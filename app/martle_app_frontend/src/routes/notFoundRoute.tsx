import NotFoundPage from "@/pages/404NotFound";
import { RouteObject } from "react-router-dom";

import { RouteSuspense } from "./routeSuspense";

type Route = RouteObject[] | RouteObject;

export const notFoundRoute: Route = [
  {
    path: "*",
    element: <RouteSuspense children={<NotFoundPage />} />,
  },
];
