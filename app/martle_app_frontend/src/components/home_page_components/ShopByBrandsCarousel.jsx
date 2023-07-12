import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import LoaderSkeleton from "../base_components/LoaderSkeleton";
import "../../pages/style/card.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1368, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 2,
  },
};

const ShopByBrandsCarousel = (props) => {
  const cardSkeleton = [...Array(window.screen.width <= 500 ? 1 : 6)].map(
    (row, i) => (
      <Paper
        key={i}
        sx={{
          height: 320,
          width: 270,
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          borderRadius: "5px",
          ":hover": { cursor: "pointer" },
          "@media (max-width: 500px)": { width: "100%", height: 220 },
        }}
      >
        {window.screen.width <= 500 ? (
          <LoaderSkeleton barPadding={10} />
        ) : (
          <>
            <LoaderSkeleton barPadding={10} />
            <LoaderSkeleton barPadding={5} />
            <LoaderSkeleton barPadding={1} />
          </>
        )}
      </Paper>
    )
  );
  const desktopCard = props.data?.map((row, i) => {
    return (
      <Paper
        key={i}
        elevation={6}
        sx={{
          width: 270,
          borderRadius: "5px",
          "@media (max-width: 500px)": {
            border: 0,
            borderRadius: "100px",
            height: 0,
          },
        }}
      >
        <div className="container">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img
                  className="w-Image object-contain border-rose-500 sm:border-0"
                  src={`http://127.0.0.1:8000` + row.brand_image}
                  alt="img"
                />
              </div>
              <div className="contentBx sm:hidden">
                <Typography
                  fontSize={20}
                  sx={{ marginTop: "20px", color: "black" }}
                >
                  {row.brand_name}
                </Typography>
              </div>
            </div>
            <ul className="sci sm:hidden">
              <li>
                <Button variant="contained">Shop</Button>
              </li>
            </ul>
          </div>
        </div>
      </Paper>
    );
  });
  return (
    <div className="w-HeaderSwiper m-auto mt-12 justify-center">
      <Typography
        fontSize={30}
        sx={{
          color: "#fff",
          marginLeft: "10px",
          marginBottom: "5px",
          letterSpacing: "2px",
          fontFamily: "fantasy",
        }}
      >
        Shop by Brands
      </Typography>
      <Carousel
        itemClass="carousel"
        slidesToSlide={2}
        responsive={responsive}
        arrows={true}
        renderButtonGroupOutside={true}
        className="z-0"
      >
        {props.isLoading ? cardSkeleton : desktopCard}
      </Carousel>
    </div>
  );
};

export default ShopByBrandsCarousel;
