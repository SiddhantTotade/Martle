import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductTable from "./components/products_crud_page_components/ProductTable";
import Product from "./components/product_page_components/Product";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-upload" element={<ProductTable />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  )
}