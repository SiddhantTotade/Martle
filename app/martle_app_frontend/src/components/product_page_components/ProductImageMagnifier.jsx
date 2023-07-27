import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlickContainer from "./ReactSlick";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import watch300 from "../product_page_components/asus_vivobook_2k3hnhx.png";
import watch1200 from "../product_page_components/wristwatch.jpg";
import "./styles/productImageMagnifier.css";

const ProductImageMagnifier = () => {
  return (
    <div id="magnifier" className="fluid react-slick">
      <ReactImageMagnify
        enlargedImagePortalId="portal"
        {...{
          smallImage: {
            alt: "image",
            width: 400,
            height: 400,
            // isFluidWidth: true,
            src: watch300,
          },
          largeImage: {
            src: watch300,
            width: 900,
            height: 900,
          },
        }}
      />
      <div id="portal" className=""></div>
      {/* <div className="fluid__image-container">
        <ReactSlickContainer
          {...{
            rimProps: {
              enlargedImagePortalId: "portal",
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%",
              },
            },
          }}
        />
      </div>
      <div className="fluid__instructions" style={{ position: "relative" }}>
        <div id="portal" className="portal"></div>
      </div> */}
    </div>
  );
};

export default ProductImageMagnifier;
