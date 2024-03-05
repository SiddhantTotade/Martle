import { Box, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import { useNavigate } from "react-router-dom";
import AppContainer from "../common/Container";
import ProductCarousel from "../common/Carousel";
import PrirmaryButton from "../common/PrirmaryButton";
import ActionContainer from "../common/ActionContainer";
import ProductQuantity from "../checkout/ProductQuantity";
import { convertToINR } from "../common/utils/helperFunctions";
import { useRemoveFromCart } from "@/hooks/app/removeFromCart";
import SkeletonProductCard from "../common/ui/skeletons/SkeletonProductCard";

interface Props {
  getIsLoading?: boolean;
  data?: any;
}

export default function MobileCartItems({ getIsLoading, data }: Props) {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const { onSubmit, isLoading: removeItem } = useRemoveFromCart();

  return (
    <AppContainer
      sx={{
        display: "none",
        mt: 0,
        "@media(max-width:700px)": {
          display: "flex",
          justifyContent: "center",
        },
      }}
    >
      {getIsLoading ? (
        <SkeletonProductCard />
      ) : (
        <ProductCarousel>
          {data?.data.data.map((product: any, index: number) => (
            <ProductCard
              key={index}
              elevation={5}
              sx={{
                display: "grid",
                width: "87%",
                rowGap: "10px",
                border: "1px solid",
                p: 1,
              }}
            >
              <Image
                src={`http://127.0.0.1:8000${product.product_cover_image}`}
                alt="product_image"
                sx={{ border: "1px solid", borderRadius: "5px" }}
                style={{
                  width: "150px",
                  height: "150px",
                  padding: "10px",
                  objectFit: "contain",
                }}
              />
              <Typography
                sx={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#2196f3",
                  },
                }}
                fontSize="small"
                onClick={() => navigate(`/product/${product.product_slug}`)}
              >
                {product.product_title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography fontWeight="bold">
                  {convertToINR(product.product_discounted_price)}
                </Typography>
                <del style={{ fontSize: "12px" }}>
                  {convertToINR(product.product_selling_price)}
                </del>
                <ProductQuantity product_id={product.id} />
              </Box>
              <ActionContainer>
                {removeItem ? (
                  <CircularProgress />
                ) : (
                  <PrirmaryButton
                    onClick={() =>
                      onSubmit({ user: user.id, product: product.id })
                    }
                    label="Remove"
                  />
                )}
              </ActionContainer>
            </ProductCard>
          ))}
        </ProductCarousel>
      )}
    </AppContainer>
  );
}
