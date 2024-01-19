import ProductCard from "../common/Card";
import ProductCarousel from "../common/Carousel";
import Image from "../common/Image";

export default function RecentlyViewed() {
  return (
    <ProductCarousel id="recently_viewed" title="Your Browsing History">
      <ProductCard
        elevation={5}
        sx={{
          display: "contents",
          width: "35%",
          cursor: "pointer",
          border: "2px solid red",
        }}
      >
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/I/61kK5V7-4RL._AC_UL100_SR100,100_.jpg"
          alt="product_image"
          width=""
          height=""
        />
      </ProductCard>
    </ProductCarousel>
  );
}
