import React from "react";
import "./style/wedding.css";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-grid-carousel";

const responsive = [
  {
    breakpoint: 1368,
    cols: 2,
    rows: 2,
    gap: 10,
    loop: true,
    autoplay: 3000,
  },
  {
    breakpoint: 500,
    cols: 1,
    rows: 1,
    gap: 10,
    loop: true,
    autoplay: 3000,
  },
];

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
};

const MensCarousel = (props) => {
  const items = props.him_product?.map((row, i) => {
    return (
      <Carousel.Item>
        <Paper
          key={i}
          sx={{
            height: 220,
            width: 220,
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
            ":hover": { cursor: "pointer" },
            "@media screen and (max-width:500px)": {
              width: "100%",
              height: "20vh",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              maxHeight: "34vh",
              width: "170px",
              translate: "15% 0%",
              position: "relative",
              overflow: "hidden",
              "@media screen and (max-width:500px)": {
                width: "80%",
              },
            }}
          >
            <img
              className="object-contain absolute h-full p-2"
              src={`http://127.0.0.1:8000` + row.product_cover_image}
              alt="img"
              width="100%"
            />
          </Box>
        </Paper>
      </Carousel.Item>
    );
  });

  return (
    <div className="w-Wedding m-auto">
      <Carousel cols={3} rows={2} responsiveLayout={responsive}>
        {items}
      </Carousel>
    </div>
  );
};

export default MensCarousel;
