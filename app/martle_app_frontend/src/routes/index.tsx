import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { ProtectedRoute } from "./ProtectedRoute";
import OrderProduct from "@/pages/app/OrderProduct";

const LoginPage = React.lazy(() => import("@/pages/auth/Login"));
const RegisterPage = React.lazy(() => import("@/pages/auth/Register"));
const ResetPasswordPage = React.lazy(
  () => import("@/pages/auth/ResetPassword")
);
const ForgotPasswordPage = React.lazy(
  () => import("@/pages/auth/ForgotPassword")
);

const HomePage = React.lazy(() => import("@/pages/app/Home"));
const ProductPage = React.lazy(() => import("@/pages/app/Product"));
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
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product/:slug",
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/buy-order/proceed/:slug",
    element: (
      <ProtectedRoute>
        <OrderProduct />
      </ProtectedRoute>
    ),
  },
];

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Suspense fallback={<CircularProgress />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  ...authRoutes,
  ...appRoutes,
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
