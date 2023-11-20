import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
];

const router = createBrowserRouter([
  { path: "*", element: <h1>404 - Not Found</h1> },
  ...authRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
