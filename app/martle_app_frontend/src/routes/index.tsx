import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import ResetPasswordPage from "@/pages/auth/ResetPassword";
import ForgotPasswordPage from "@/pages/auth/ForgotPassword";
import NotFoundPage from "@/pages/404NotFound";

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/auth/reset-password", element: <ResetPasswordPage /> },
  { path: "/auth/forgot-password", element: <ForgotPasswordPage /> },
];

const router = createBrowserRouter([
  { path: "*", element: <NotFoundPage /> },
  ...authRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
