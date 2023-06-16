import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heart from "../base_components/Heart";
import { Link } from "react-router-dom";

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
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const style =
  "h-62 grid justify-items-center w-56 border-2 border-white rounded-xl text-white bg-gray-700";

const SpeciallyFromCarousel = () => {
  const rows = [];

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
        Specially from APPLE
      </Typography>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <Paper
          elevation={16}
          sx={{
            width: 270,
            height: "275px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5roqWOJQHnAfSDUCWK6SbnGrABtwSjw3lPA"
            alt="img"
            width="40%"
          />
          <Typography fontFamily="serif" fontStyle="oblique" fontSize={23}>
            Apple for You
          </Typography>
        </Paper>
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
            sx={{
              gap: "5px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                maxHeight: "23.5vh",
                width: "150px",
                translate: "30% 0%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                className="object-contain absolute h-full"
                src="https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_SY200_.jpg"
                alt="img"
                width="100%"
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0 0 5px 5px",
                marginTop: "auto",
                width: "100%",
              }}
            >
              View
            </Button>
          </Paper>
          <Paper
            sx={{
              gap: "5px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                maxHeight: "23.5vh",
                width: "150px",
                translate: "30% 0%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                className="object-contain absolute h-full"
                src="https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_SY200_.jpg"
                alt="img"
                width="100%"
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                borderRadius: "0 0 5px 5px",
                marginTop: "auto",
                width: "100%",
              }}
            >
              View
            </Button>
          </Paper>
          <Paper>Hello</Paper>
          <Paper>Hello</Paper>
          <Paper>Hello</Paper>
          <Paper>Hello</Paper>
          <Paper>Hello</Paper>
          <Paper>Hello</Paper>
        </Carousel>
      </Box>
    </div>
  );
};

export default SpeciallyFromCarousel;
