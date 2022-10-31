import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTable from "./components/products_page/ProductTable";
import App from "./App"

export default function Home() {
    return (
        <Router>
            <Routes>
                <Route path="/product" element={<ProductTable />} />
            </Routes>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </Router>
    )
}