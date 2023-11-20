import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "@/pages/auth/Login";

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [{ path: "/login", element: <LoginPage /> }];

const router = createBrowserRouter([
  { path: "*", element: <h1>404 - Not Found</h1> },
  ...authRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
