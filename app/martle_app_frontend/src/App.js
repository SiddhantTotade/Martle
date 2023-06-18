import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductTable from "./components/products_crud_page_components/ProductTable";
import Product from "./components/product_page_components/Product";
import LoginPage from "./pages/authentication/Login";
import RegisterPage from "./pages/authentication/Register";
import ResetPasswordPage from "./pages/authentication/ResetPassword";
import ResetPasswordEmailPage from "./pages/authentication/ResetPasswordEmail";

export default function App() {
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


        {/* Application  Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/api/product-upload" element={<ProductTable />} /> */}
        {/* <Route path="/api/product/id/:id" element={<Product />} /> */}
      </Routes>
    </Router>
  );
}
