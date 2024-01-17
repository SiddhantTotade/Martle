import Image from "../common/Image";
import ProductCard from "../common/Card";
import ProductCarousel from "../common/Carousel";
import "./styles/index.css";

export default function Clothing() {
  return (
    <ProductCarousel title="50% - 80% off | Clothing, Footwear, Eyewear & more">
      <ProductCard
        className="product-card latest-deals"
        elevation={5}
        sx={{
          width: "70%",
          mr: 3,
          p: 2,
          display: "grid",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <Image
          src="https://m.media-amazon.com/images/I/51AjohATwIL._AC_SY200_.jpg"
          alt="product_image"
          width="100%"
          height=""
          style={{
            display: "flex",
            width: "100%",
            borderRadius: "5px",
            objectFit: "scale-down",
            transition: "transform .2s",
          }}
        />
      </ProductCard>
    </ProductCarousel>
  );
}
