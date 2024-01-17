import Image from "../common/Image";
import ProductCard from "../common/Card";
import ProductCarousel from "../common/Carousel";
import PrirmaryButton from "../common/PrirmaryButton";
import "./styles/index.css";

export default function LatestDeals() {
  return (
    <ProductCarousel title="Trending Deals">
      <ProductCard
        className="product-card latest-deals"
        elevation={5}
        sx={{
          mr: 3,
          p: 1,
          display: "grid",
          gap: "10px",
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
        <PrirmaryButton label="View" />
      </ProductCard>
    </ProductCarousel>
  );
}
