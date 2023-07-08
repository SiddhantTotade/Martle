import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1368, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

const SpeciallyFromCarousel = () => {
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
          elevation={8}
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
          slidesToSlide={1}
          responsive={responsive}
          arrows={true}
          renderButtonGroupOutside={true}
          className="z-0 w-SpecialFrom  sm:rounded-md"
        >
          <Paper
            sx={{
              width: 270,
              height: "275px",
              gap: "5px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "5px",
              marginRight: "10px",
              "@media screen and (max-width: 500px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "100vh",
                maxHeight: "23.5vh",
                width: "150px",
                translate: "40% 0%",
                position: "relative",
                overflow: "hidden",
                "@media screen and (max-width: 500px)": {
                  translate: "35% 10%",
                  left: "-10px",
                },
                "@media screen and (max-width: 1368px)": {
                  translate: "40% 10%",
                },
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
              width: 270,
              height: "275px",
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
                translate: "40% 10%",
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
              width: 270,
              height: "275px",
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
                translate: "40% 10%",
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
