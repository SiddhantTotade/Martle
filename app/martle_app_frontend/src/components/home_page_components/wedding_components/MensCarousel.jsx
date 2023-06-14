import React from "react";
import "./style/wedding.css";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-grid-carousel";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
};

const MensCarousel = () => {
  const items = (
    <Paper
      sx={{
        height: 200,
        width: 200,
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        ":hover": { cursor: "pointer" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          maxHeight: "34vh",
          width: "170px",
          translate: "25% 0%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          className="object-contain absolute h-full p-2"
          src="https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_SY200_.jpg"
          alt="img"
          width="100%"
        />
      </Box>
    </Paper>
  );

  const rows = [];

  for (let index = 0; index < 10; index++) {
    rows.push(items);
  }

  return (
    <div className="w-Wedding m-auto border-2 border-green-500 ">
      <Carousel cols={2} rows={2}>
        {rows.map((row) => {
          return <Carousel.Item>{row}</Carousel.Item>;
        })}
      </Carousel>
    </div>
  );
};

export default MensCarousel;
