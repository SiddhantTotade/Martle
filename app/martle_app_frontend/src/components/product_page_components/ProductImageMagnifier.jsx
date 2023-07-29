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
    <div className="container border-2 border-red-700">
      <div className="left">
        <div className="left_1">
          {images.map((image, i) => {
            return (
              <div
                ref={addRef}
                onMouseOver={() => handleHover(image, i)}
                className="img_wrap hover:border-1 hover:border-orange-600"
                key={i}
              >
                <img src={image} alt="img" className="p-1" />
              </div>
            );
          })}
        </div>
        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "img",
                width: 500,
                height: 500,
                src: img,
              },
              largeImage: {
                alt: "img",
                src: img,
                width: 980,
                height: 980,
              },
              enlargedImageContainerDimensions: {
                width: "155%",
                height: "120%",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageMagnifier;
