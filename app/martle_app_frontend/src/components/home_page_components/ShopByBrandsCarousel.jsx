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
    items: 1,
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
        <Paper elevation={8} sx={{ width: 270, borderRadius: "5px" }}>
          <div class="container">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img
                    className="rounded-full border-2 p-2 border-rose-500"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9NjzZjN0NV8LPiNPM7HCeYJj-KkkR2vdKg&usqp=CAU"
                    alt="img"
                  />
                </div>
                <div class="contentBx">
                  <Typography
                    fontSize={20}
                    sx={{ marginTop: "20px", color: "black" }}
                  >
                    Xiaomi
                  </Typography>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <Button variant="contained">Shop</Button>
                </li>
              </ul>
            </div>
          </div>
        </Paper>
        <Paper elevation={16} sx={{ width: 270 }}>
          <div class="container">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img
                    className="rounded-full border-2 p-2 border-rose-500"
                    src="data:image/png;base64,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"
                    alt="img"
                  />
                </div>
                <div class="contentBx">
                  <Typography
                    fontSize={20}
                    sx={{ marginTop: "20px", color: "black" }}
                  >
                    Allen Solly
                  </Typography>
                </div>
              </div>
              <ul class="sci">
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
