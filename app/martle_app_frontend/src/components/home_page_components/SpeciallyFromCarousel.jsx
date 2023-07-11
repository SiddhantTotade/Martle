import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoaderSkeleton from "../base_components/LoaderSkeleton";

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

const SpeciallyFromCarousel = (props) => {
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
            src={`http://127.0.0.1:8000` + row.product_cover_image}
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
        Specially from{" "}
        {String(
          props.special_product_image_and_name
            ? (props.special_product_image_and_name || "")[0].brand_name
            : ""
        ).toUpperCase()}
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
            {props.special_product_image_and_name
              ? (props.special_product_image_and_name || "")[0].brand_name
              : ""}{" "}
            for You
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
          {props.isLoading ? cardSkeleton : desktopCard}
        </Carousel>
      </Box>
    </div>
  );
};

export default SpeciallyFromCarousel;
