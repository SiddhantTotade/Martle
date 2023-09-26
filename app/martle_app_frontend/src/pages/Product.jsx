import React, { useEffect, useState } from "react";
import NavBar from "../components/base_components/NavBar";
import Footer from "../components/base_components/Footer";
import ProductImageMagnifier from "../components/product_page_components/ProductImageMagnifier";
import ProductDetails from "../components/product_page_components/ProductDetails";
import { useGetSpecificProductAPIQuery } from "../services/productAPIs";
import { getToken } from "../services/LocalStorageService";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TechnicalDetails from "../components/product_page_components/TechnicalDetails";

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
      <Grid2
        container
        gridTemplateColumns={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          margin: "80px auto",
          position: "relative",
        }}
        spacing={0}
      >
        <Grid2 xs={5}>
          <ProductImageMagnifier
            isLoading={isLoading}
            product_images={product_images}
          />
        </Grid2>
        <Grid2 xs={7}>
          <ProductDetails
            isLoading={isLoading}
            productDetails={productDetails}
          />
          <TechnicalDetails
            product_description={data[0]?.product_description}
          />
        </Grid2>
      </Grid2>
      <Footer />
    </>
  );
};

export default Product;
