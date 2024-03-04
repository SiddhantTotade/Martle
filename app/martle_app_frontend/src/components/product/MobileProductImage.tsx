import Image from "../common/Image";
import "react-multi-carousel/lib/styles.css";
import ProductCarousel from "../common/Carousel";

interface Props {
  product_images: any;
}

export default function MobileProductImage({ product_images }: Props) {
  return (
    <ProductCarousel>
      {product_images?.map((product: any, index: number) => (
        <Image
          key={index}
          src={`http://127.0.0.1:8000${product.product_img_file}`}
          alt="product_image"
          width="90%"
          sx={{ display: "flex", justifyContent: "center" }}
          style={{
            width: "100%",
            height: "40vh",
            objectFit: "scale-down",
          }}
        />
      ))}
    </ProductCarousel>
  );
}
