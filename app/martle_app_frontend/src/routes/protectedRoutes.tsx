import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";

import LoginRequired from "@/pages/LoginRequired";

export const ProtectedRoutes = ({ children }: PropsWithChildren) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.authLoading) {
    return <LoginRequired />;
  }

  return (
    <>{!auth.isAuthenticated ? <Navigate to="/auth/login" /> : children}</>
  );
};
