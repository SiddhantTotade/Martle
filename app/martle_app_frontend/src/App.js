import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductTable from "./components/products_crud_page_components/ProductTable";
import Product from "./pages/Product";
import LoginPage from "./pages/authentication/Login";
import RegisterPage from "./pages/authentication/Register";
import ResetPasswordPage from "./pages/authentication/ResetPassword";
import ResetPasswordEmailPage from "./pages/authentication/ResetPasswordEmail";
import { useSelector } from "react-redux";

export default function App() {
  const { access_token } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/api/register" element={<RegisterPage />} />
        <Route path="/api/login" element={<LoginPage />} />
        <Route
          path="/api/user/reset-password/:id/:token"
          element={<ResetPasswordPage />}
        />
        <Route
          path="/reset-password-email"
          element={<ResetPasswordEmailPage />}
        />
        <Route
          index
          element={
            !access_token ? (
              <Navigate to="/api/login" />
            ) : (
              <Navigate to="/api/home" />
            )
          }
        />
        <Route
          path="/api/home"
          element={
            access_token ? (
              <Navigate to="/api/home" />
            ) : (
              <Navigate to="/api/login" />
            )
          }
        />

        {/* Application  Routes */}
        <Route index path="/api/home" element={<Home />} />
        {/* <Route path="/api/product-upload" element={<ProductTable />} /> */}
        <Route path="/api/product/id/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}
