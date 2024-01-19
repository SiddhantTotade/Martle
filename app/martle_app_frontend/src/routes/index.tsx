import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";

const LoginPage = React.lazy(() => import("@/pages/auth/Login"));
const RegisterPage = React.lazy(() => import("@/pages/auth/Register"));
const ResetPasswordPage = React.lazy(
  () => import("@/pages/auth/ResetPassword")
);
const ForgotPasswordPage = React.lazy(
  () => import("@/pages/auth/ForgotPassword")
);
const HomePage = React.lazy(() => import("@/pages/app/Home"));
const NotFoundPage = React.lazy(() => import("@/pages/404NotFound"));

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [
  {
    path: "/auth/login",
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/auth/register",
    element: (
      <Suspense>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/auth/reset-password/*",
    element: (
      <Suspense>
        <ResetPasswordPage />
      </Suspense>
    ),
  },
  {
    path: "/auth/forgot-password",
    element: (
      <Suspense>
        <ForgotPasswordPage />
      </Suspense>
    ),
  },
];

const appRoutes: Route = [
  {
    path: "/",
    element: (
      <Suspense>
        <HomePage />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Suspense>
        <NotFoundPage />
      </Suspense>
    ),
  },
  ...authRoutes,
  ...appRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
