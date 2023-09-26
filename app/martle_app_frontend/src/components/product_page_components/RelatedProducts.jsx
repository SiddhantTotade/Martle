import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1368, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const RelatedProducts = () => {
  return (
    <Grid2>
      <Carousel
        itemClass="carousel"
        slidesToSlide={3}
        responsive={responsive}
        arrows={true}
        renderButtonGroupOutside={true}
      ></Carousel>
    </Grid2>
  );
};

export default RelatedProducts;
