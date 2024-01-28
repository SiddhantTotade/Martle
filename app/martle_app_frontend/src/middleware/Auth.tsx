import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/auth/auth";

interface AuthMiddlewareProps {
  children: ReactNode;
}

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const { accessToken } = useAuth();

  return accessToken ? <Outlet /> : <Navigate to="/" />;
};

export default AuthMiddleware;
