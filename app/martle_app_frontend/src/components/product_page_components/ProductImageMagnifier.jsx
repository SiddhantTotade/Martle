import React, { useState, useRef, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import i1 from "../product_page_components/wristwatch.jpg";
import i2 from "../product_page_components/asus.png";
import "./styles/productImageMagnifier.css";

const images = [i1, i2];

const ProductImageMagnifier = (props) => {
  const [img, setImg] = useState("");

  const imgRef = useRef([]);
  imgRef.current = [];

  useEffect(() => {
    setImg(
      props.product_images ? props?.product_images[0].product_img_file : ""
    );
  }, [props]);

  const addRef = (el) => {
    if (el && !imgRef.current.includes(el)) {
      imgRef.current.push(el);
    }
  };

  const handleHover = (image, i) => {
    setImg(image);
    // imgRef.current[i].classList.add("active");

    for (var j = 0; j < images.length; j++) {
      if (i !== j) {
        // imgRef.current[j].classList.remove("active");
      }
    }
  };

  return (
    <div className="container fixed border-2 border-rose-500">
      <div className="left">
        <div className="left_1">
          {props.product_images?.map((image, i) => {
            return (
              <div
                ref={addRef}
                onMouseOver={() => handleHover(image.product_img_file, i)}
                className="img_wrap"
                key={i}
              >
                <img
                  src={`http://127.0.0.1:8000` + image.product_img_file}
                  alt="img"
                  className="p-1"
                />
              </div>
            );
          })}
        </div>
        <div className="left_2">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "img",
                src: `http://127.0.0.1:8000/${img}`,
                width: 500,
                height: 500,
              },
              largeImage: {
                alt: "img",
                src: `http://127.0.0.1:8000/${img}`,
                width: 980,
                height: 980,
              },
              enlargedImageContainerDimensions: {
                width: "150%",
                height: "100%",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImageMagnifier;
