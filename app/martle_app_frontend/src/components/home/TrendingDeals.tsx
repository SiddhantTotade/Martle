import { useNavigate } from "react-router-dom";

import "./styles/index.css";
import Image from "../common/Image";
import ProductCard from "../common/Card";
import ProductCarousel from "../common/Carousel";
import PrirmaryButton from "../common/PrirmaryButton";
import CardSkeleton from "./ui/CardSkeleton";

interface Props {
  data?: any;
  isLoading?: boolean;
}

export default function LatestDeals({ data, isLoading }: Props) {
  const navigate = useNavigate();

  return (
    <ProductCarousel id="trending_deals" title="Trending Deals">
      {isLoading ? (
        <CardSkeleton />
      ) : (
        data.data.map((product: any, id: number) => (
          <ProductCard
            key={id}
            className="product-card latest-deals"
            elevation={5}
            sx={{
              mr: 3,
              p: 1,
              display: "grid",
              gap: "10px",
              maxWidth: "90%",
            }}
          >
            <Image
              src={`http://127.0.0.1:8000${product.product_cover_image}`}
              alt="product_image"
              width="100%"
              style={{
                display: "flex",
                width: "100%",
                borderRadius: "5px",
                objectFit: "contain",
                height: "20vh",
                padding: "10px",
                transition: "transform .2s",
              }}
            />
            <PrirmaryButton
              label="View"
              onClick={() => navigate(product.product_slug)}
            />
          </ProductCard>
        ))
      )}
    </ProductCarousel>
  );
}
