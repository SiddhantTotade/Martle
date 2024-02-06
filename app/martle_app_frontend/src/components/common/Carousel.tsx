import { ReactNode } from "react";
import { Typography } from "@mui/material";
import Carousel from "react-multi-carousel";

import "./styles/Carousel.css";
import AppContainer from "./Container";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  book: {
    breakpoint: { max: 1368, min: 464 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 200 },
    items: 1,
    slidesToSlide: 1,
  },
};

interface Props {
  id?: string;
  title?: string;
  children: ReactNode;
}

export default function ProductCarousel({ id, title, children }: Props) {
  return (
    <AppContainer id={id}>
      <Typography fontSize={20} fontWeight={500}>
        {title}
      </Typography>
      <Carousel
        className="product-carousel"
        itemClass="carousel"
        slidesToSlide={3}
        responsive={responsive}
        arrows={true}
        renderButtonGroupOutside={true}
      >
        {children}
      </Carousel>
    </AppContainer>
  );
}
