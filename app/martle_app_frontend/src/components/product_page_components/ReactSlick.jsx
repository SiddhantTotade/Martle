import React, { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";
import watch from "./wristwatch.jpg";
import "./styles/reactSlick.css";
import w2 from "./asus_vivobook_2k3hnhx.png";

const frontSrcSet = [
  //   { src: w2, setting: "1020w" },
  //   { src: watch, setting: "500w" },
  //   { src: watch, setting: "779w" },
  // { src: front_1200, setting: "1200w" },
  //   { src: front_1426, setting: "1426w" },
]
  .map((item) => `${item.src} ${item.setting}`)
  .join(", ");

const backSrcSet = [
  { src: w2, setting: "500w" },
  //   { src: watch, setting: "779w" },
  //   { src: w2, setting: "1020w" },
  //   { src: back_1200, setting: "1200w" },
  //   { src: back_1426, setting: "1426w" },
]
  .map((item) => `${item.src} ${item.setting}`)
  .join(", ");

const dataSource = [
  {
    srcSet: frontSrcSet,
    small: w2,
    large: w2,
  },
  {
    srcSet: backSrcSet,
    small: w2,
    large: w2,
  },
];

const ReactSlickContainer = (props) => {
  return (
    <ReactSlick
      {...{
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      }}
      {...props.rimProps}
    >
      {dataSource.map((src, index) => (
        <div key={index}>
          <ReactImageMagnify
            {...props.rimProps}
            {...{
              smallImage: {
                alt: "Wristwatch by Versace",
                isFluidWidth: true,
                src: src.small,
                srcSet: src.srcSet,
                sizes:
                  "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
              },
              largeImage: {
                src: src.large,
                width: 2000,
                height: 2000,
              },
              lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
            }}
          />
        </div>
      ))}
    </ReactSlick>
  );
};

export default ReactSlickContainer;
