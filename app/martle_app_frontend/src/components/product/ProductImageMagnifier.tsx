import { useState, useRef, useEffect } from "react";
import ReactImageMagnify from "react-image-magnify";

import Image from "../common/Image";
import ProductAddPurchase from "./ProductAddAndPuchase";
import "./style/productMagnifier.css";

const ProductImageMagnifier = (props) => {
  const [img, setImg] = useState("");
  const imgRef = useRef([]);
  imgRef.current = [];

  useEffect(() => {
    setImg(
      props.product_images ? props?.product_images[0].product_img_file : ""
    );
  }, [props]);

  const addRef = (el: any) => {
    if (el && !imgRef.current.includes(el)) {
      imgRef.current.push(el);
    }
  };

  const handleHover = (image: any, index: number) => {
    setImg(image);
  };

  return (
    <div className="relative">
      <div className="container">
        <div className="left">
          <div className="left_1">
            {props.product_images?.map((image: any, index: number) => {
              return (
                <div
                  ref={addRef}
                  onMouseOver={() => handleHover(image.product_img_file, index)}
                  className="img_wrap"
                  key={index}
                >
                  <Image
                    src={`http://127.0.0.1:8000` + image.product_img_file}
                    alt="product_image"
                    className="p-1"
                    width="100%"
                    height="10vh"
                    sx={{ display: "flex", alignItems: "center" }}
                    style={{
                      display: "flex",
                      height: "10vh",
                    }}
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
                  width: 430,
                  height: 430,
                },
                largeImage: {
                  alt: "img",
                  src: `http://127.0.0.1:8000/${img}`,
                  width: 2050,
                  height: 1800,
                },
                enlargedImageContainerDimensions: {
                  width: "200%",
                  height: "130%",
                },
                enlargedImageContainerStyle: {
                  border: "2px solid rgb(138, 138, 138)",
                  zIndex: "1000000000",
                },
                enlargedImageStyle: {
                  background: "#fff",
                },
                imageStyle: {
                  border: "2px solid rgb(138, 138, 138)",
                  objectFit: "contain",
                  background: "#fff",
                },
                shouldUsePositiveSpaceLens: true,
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
