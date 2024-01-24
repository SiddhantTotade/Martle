import ProductCard from "../common/Card";
import Carousel from "react-multi-carousel";
import Image from "../common/Image";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function MobileProductImage() {
  return (
    <Carousel
      containerClass={`w-full`}
      className="product-carousel"
      itemClass="carousel"
      autoPlay={false}
      slidesToSlide={1}
      responsive={responsive}
      arrows={true}
      showDots={true}
      renderButtonGroupOutside={true}
    >
      <ProductCard elevation={0}>
        <Image
          src="https://m.media-amazon.com/images/I/41F20jeVASL._SY300_SX300_QL70_FMwebp_.jpg"
          alt="product_image"
          style={{ width: "100%", height: "100%", objectFit: "scale-down" }}
        />
      </ProductCard>
    </Carousel>
  );
}
