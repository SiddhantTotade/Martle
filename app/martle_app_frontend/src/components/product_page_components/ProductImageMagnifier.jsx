import React, { useState, useRef } from "react";
import ReactImageMagnify from "react-image-magnify";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import i1 from "../product_page_components/wristwatch.jpg";
import i2 from "../product_page_components/asus.png";
import "./styles/productImageMagnifier.css";

const images = [i1, i2];

const ProductImageMagnifier = () => {
  const [img, setImg] = useState(images[0]);

  const handleHover = (image, i) => {
    setImg(image);
    // imgRef.current[i].className += " active";

    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        // imgRef.current[j].classList.remove("active");
      }
    }
  };

  const imgRef = useRef([]);
  imgRef.current = [];

  const addRef = (el) => {
    if (el && !imgRef.current.includes(el)) {
      imgRef.current.push(el);
    }
  };
  return (
    <div className="container">
      <div className="left">
        <div className="left_1">
          {images.map((image, i) => {
            return (
              <div
                ref={addRef}
                onMouseOver={() => handleHover(image, i)}
                className="img_wrap hover:border-2 hover:border-orange-600"
                key={i}
              >
                <img src={image} alt="img" />
              </div>
            );
          })}
        </div>
        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "img",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                alt: "img",
                src: img,
                width: 850,
                height: 850,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "150%",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageMagnifier;
