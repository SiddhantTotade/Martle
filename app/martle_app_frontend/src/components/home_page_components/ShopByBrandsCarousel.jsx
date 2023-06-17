import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
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

const ShopByBrandsCarousel = () => {
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
        partialVisbile={false}
        slidesToSlide={2}
        responsive={responsive}
        arrows={true}
        renderButtonGroupOutside={true}
        className="z-0"
      >
        <Paper
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
                    className="rounded-full border-2 p-2 border-rose-500 sm:border-0"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9NjzZjN0NV8LPiNPM7HCeYJj-KkkR2vdKg&usqp=CAU"
                    alt="img"
                  />
                </div>
                <div className="contentBx sm:hidden">
                  <Typography
                    fontSize={20}
                    sx={{ marginTop: "20px", color: "black" }}
                  >
                    Xiaomi
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
        <Paper
          elevation={6}
          sx={{
            width: 270,
            borderRadius: "5px",
            "@media (max-width: 500px)": {
              width: "70%",
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
                    className="rounded-full border-2 p-2 border-rose-500 sm:border-0"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9NjzZjN0NV8LPiNPM7HCeYJj-KkkR2vdKg&usqp=CAU"
                    alt="img"
                  />
                </div>
                <div className="contentBx sm:hidden">
                  <Typography
                    fontSize={20}
                    sx={{ marginTop: "20px", color: "black" }}
                  >
                    Xiaomi
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
        <Paper
          elevation={6}
          sx={{
            width: 270,
            borderRadius: "5px",
            "@media (max-width: 500px)": { width: "150px", border: 0 },
          }}
        >
          <div className="container">
            <div className="card">
              <div className="content">
                <div className="imgBx">
                  <img
                    className="rounded-full border-2 p-2 border-rose-500 sm:border-0"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9NjzZjN0NV8LPiNPM7HCeYJj-KkkR2vdKg&usqp=CAU"
                    alt="img"
                  />
                </div>
                <div className="contentBx sm:hidden">
                  <Typography
                    fontSize={20}
                    sx={{ marginTop: "20px", color: "black" }}
                  >
                    Xiaomi
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
      </Carousel>
    </div>
  );
};

export default ShopByBrandsCarousel;
