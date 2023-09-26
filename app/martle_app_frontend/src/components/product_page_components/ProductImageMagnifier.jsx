import React, { useState, useRef, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";
import ProductAddPurchase from "./ProductAddPurchase";
import "./styles/productImageMagnifier.css";

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

    for (var j = 0; j < img.length; j++) {
      if (i !== j) {
        // imgRef.current[j].classList.remove("active");
      }
    }
  };

  return (
    <div className="relative">
      <div className="container">
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
                  width: 750,
                  height: 750,
                },
                enlargedImageContainerDimensions: {
                  width: "150%",
                  height: "100%",
                },
              }}
            />
            <ProductAddPurchase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageMagnifier;
