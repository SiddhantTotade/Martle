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

  const handleHover = (image: any) => {
    setImg(image);
  };

  return (
    <div className="relative">
      <div className="container">
        <div className="left">
          <div className="left_1">
            {props.product_images?.map((image: any, i: number) => {
              return (
                <div
                  ref={addRef}
                  onMouseOver={() => handleHover(image.product_img_file, i)}
                  className="img_wrap"
                  key={i}
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
                      objectFit: "contain",
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
                  width: "100%",
                  height: "100%",
                },
                enlargedImageStyle: {
                  objectFit: "scale-down",
                  background: "#fff",
                },
                imageStyle: {
                  border: "1px  solid gainsboro",
                  objectFit: "contain",
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
