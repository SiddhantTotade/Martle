import Carousel from "react-multi-carousel";

import ProductCard from "../common/Card";
import AppContainer from "../common/Container";
import Image from "../common/Image";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1368, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Hero() {
  return (
    <AppContainer sx={{ mt: "6rem" }}>
      <Carousel
        className="product-carousel hero-carousel"
        itemClass="carousel"
        slidesToSlide={1}
        responsive={responsive}
        arrows={true}
        autoPlay={true}
        infinite={true}
        showDots={true}
        renderButtonGroupOutside={true}
      >
        <ProductCard sx={{ all: "unset" }} elevation={5}>
          <Image
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a2f0763050560219.jpeg?q=20"
            alt="product_image"
          />
        </ProductCard>
        <ProductCard sx={{ all: "unset" }} elevation={5}>
          <Image
            src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a2f0763050560219.jpeg?q=20"
            alt="product_image"
          />
        </ProductCard>
      </Carousel>
    </AppContainer>
  );
}
