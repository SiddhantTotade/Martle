import { useGetRecommendedQuery } from "@/redux/services/appApiSlice";
import ProductCarousel from "./Carousel";
import ProductCard from "./Card";
import Image from "./Image";
import SkeletonProductCard from "./ui/skeletons/SkeletonProductCard";
import { Typography } from "@mui/material";
import { shortText } from "./utils/helperFunctions";

export default function RecommendCarousel() {
  const { data, isLoading } = useGetRecommendedQuery(undefined);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <SkeletonProductCard />
      ) : (
        <ProductCarousel>
          {data?.[0]?.recommend_products?.map((product: any, index: number) => (
            <ProductCard
              elevation={5}
              key={index}
              sx={{ p: 1, "&:hover": { cursor: "pointer" } }}
            >
              <Image
                src={`http://127.0.0.1:8000` + product.product_cover_image}
                alt="product_image"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <Typography fontSize={12}>
                {" "}
                {shortText(product.product_title, 60)}
              </Typography>
            </ProductCard>
          ))}
        </ProductCarousel>
      )}
    </>
  );
}
