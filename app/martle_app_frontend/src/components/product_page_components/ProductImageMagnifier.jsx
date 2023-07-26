import React from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import watch300 from "../product_page_components/asus_vivobook_2k3hnhx.png";
import watch1200 from "../product_page_components/wristwatch.jpg";

const ProductImageMagnifier = () => {
  return (
    <div class="flex-center">
      <div class="card flex-center">
        <section class="product-img">
          <img src="./Mobile.jpg" alt="mobile" />
          <div class="magnifier-lens"></div>
        </section>
        <section class="product-details">
          <div class="magnified-img"></div>
        </section>
      </div>
    </div>
  );
};

export default ProductImageMagnifier;
