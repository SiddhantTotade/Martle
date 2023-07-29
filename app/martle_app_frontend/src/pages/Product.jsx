import React from "react";
import NavBar from "../components/base_components/NavBar";
import Footer from "../components/base_components/Footer";
import { Box } from "@mui/material";
import ProductImageMagnifier from "../components/product_page_components/ProductImageMagnifier";
import ProductDetails from "../components/product_page_components/ProductDetails";

const Product = () => {
  const currUrl = window.location.pathname.replace("/api/product/", "");
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          width: "90%",
          margin: "80px auto",
          gap: "10px",
          height: "80vh",
        }}
      >
        <ProductImageMagnifier />
        <ProductDetails />
      </Box>
      <Footer />
    </>
  );
};

export default Product;
