import React, { Suspense } from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { RouteSuspense } from "./routeSuspense";
import { ProtectedRoutes } from "./protectedRoutes";

const LoginPage = React.lazy(() => import("@/pages/auth/Login"));
const RegisterPage = React.lazy(() => import("@/pages/auth/Register"));
const ResetPasswordPage = React.lazy(
  () => import("@/pages/auth/ResetPassword")
);
const ForgotPasswordPage = React.lazy(
  () => import("@/pages/auth/ForgotPassword")
);

const CartPage = React.lazy(() => import("@/pages/app/Cart"));
const HomePage = React.lazy(() => import("@/pages/app/Home"));
const OrdersPage = React.lazy(() => import("@/pages/app/Orders"));
const ProductPage = React.lazy(() => import("@/pages/app/Product"));
const AddressPage = React.lazy(() => import("@/pages/app/Address"));
const FavoritesPage = React.lazy(() => import("@/pages/app/Favorites"));
const CheckoutPage = React.lazy(() => import("@/pages/app/OrderProduct"));
const SingleOrderPage = React.lazy(() => import("@/pages/app/SingleOrder"));
const SearchPage = React.lazy(() => import("@/pages/app/Search"));
const PaymentPage = React.lazy(() => import("@/pages/app/Payment"));
const SuccessPage = React.lazy(() => import("@/pages/app/Success"));
const FailedPage = React.lazy(() => import("@/pages/app/Failed"));

const NotFoundPage = React.lazy(() => import("@/pages/404NotFound"));

type Route = RouteObject[] | RouteObject;

const authRoutes: Route = [
  {
    path: "/auth/login",
    element: <RouteSuspense children={<LoginPage />} />,
  },
  {
    path: "/auth/register",
    element: <RouteSuspense children={<RegisterPage />} />,
  },
  {
    path: "/auth/reset-password/*",
    element: <RouteSuspense children={<ResetPasswordPage />} />,
  },
  {
    path: "/auth/forgot-password",
    element: <RouteSuspense children={<ForgotPasswordPage />} />,
  },
];

const appRoutes: Route = [
  {
    path: "/",
    element: (
      <ProtectedRoutes children={<RouteSuspense children={<HomePage />} />} />
    ),
  },
  {
    path: "/product/:slug",
    element: (
      <ProtectedRoutes
        children={<RouteSuspense children={<ProductPage />} />}
      />
    ),
  },
  {
    path: "/checkout/proceed/:slug",
    element: (
      <ProtectedRoutes
        children={<RouteSuspense children={<CheckoutPage />} />}
      />
    ),
  },
  {
    path: "/addresses",
    element: (
      <ProtectedRoutes
        children={<RouteSuspense children={<AddressPage />} />}
      />
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoutes children={<RouteSuspense children={<OrdersPage />} />} />
    ),
  },
  {
    path: "/orders/:slug",
    element: (
      <ProtectedRoutes
        children={<RouteSuspense children={<SingleOrderPage />} />}
      />
    ),
  },
  {
    path: "/favorites",
    element: (
      <ProtectedRoutes
        children={<RouteSuspense children={<FavoritesPage />} />}
      />
    ),
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoutes children={<RouteSuspense children={<CartPage />} />} />
    ),
  },
  {
    path: "/search/:query",
    element: (
      <ProtectedRoutes children={<RouteSuspense children={<SearchPage />} />} />
    ),
  },
  {
    path: "/payment/proceed",
    element: (
      <ProtectedRoutes
        children={<RouteSuspense children={<PaymentPage />} />}
      />
    ),
  },
  {
    path: "/payment/success/",
    element: (
      <ProtectedRoutes
        children={<RouteSuspense children={<SuccessPage />} />}
      />
    ),
  },
  {
    path: "/payment/failed/",
    element: (
      <ProtectedRoutes children={<RouteSuspense children={<FailedPage />} />} />
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
