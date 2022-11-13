import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductTable from "./components/products_crud_page_components/ProductTable";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-upload" element={<ProductTable />} />
      </Routes>
    </Router>
  )
}