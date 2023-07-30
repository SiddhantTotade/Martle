import React, { useEffect, useState } from "react";
import NavBar from "../components/base_components/NavBar";
import Footer from "../components/base_components/Footer";
import { Box } from "@mui/material";
import ProductImageMagnifier from "../components/product_page_components/ProductImageMagnifier";
import ProductDetails from "../components/product_page_components/ProductDetails";
import { useGetSpecificProductAPIQuery } from "../services/productAPIs";
import { getToken } from "../services/LocalStorageService";

const Product = () => {
  const { access_token } = getToken();

  const [currSlug, setCurrSlug] = useState("");

  const { data = [], isLoading } = useGetSpecificProductAPIQuery({
    currSlug,
    access_token,
  });

  const product_images = data ? data[0]?.product_images : [];

  const productDetails = data ? data : [];

  useEffect(() => {
    setCurrSlug(window.location.pathname.replace("/api/product/", ""));
  }, []);

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
          position: "relative",
        }}
      >
        <ProductImageMagnifier
          isLoading={isLoading}
          product_images={product_images}
        />
        <ProductDetails isLoading={isLoading} productDetails={productDetails} />
      </Box>
      <Footer />
    </>
  );
};

export default Product;
