import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Box, Typography, CircularProgress } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import PrirmaryButton from "../common/PrirmaryButton";
import ActionContainer from "../common/ActionContainer";
import { convertToINR } from "../common/utils/helperFunctions";
import { useRemoveFromCart } from "@/hooks/app/removeFromCart";
import ProductQuantity from "@/components/checkout/ProductQuantity";
import SkeletonProductCard from "../common/ui/skeletons/SkeletonProductCard";

interface Props {
  getIsLoading?: boolean;
  data?: any;
}

export default function CartItems({ getIsLoading, data }: Props) {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const { onSubmit, isLoading: removeItem } = useRemoveFromCart();

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        position: "relative",
        "@media(max-width:700px)": {
          display: "none",
        },
      }}
    >
      {getIsLoading ? (
        <SkeletonProductCard />
      ) : (
        <>
          {data?.data.data.map((product: any, index: number) => (
            <ProductCard
              key={index}
              elevation={5}
              sx={{
                height: "46vh",
                display: "grid",
                width: "270px",
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
                  objectFit: "contain",
                  padding: "5px",
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
        </>
      )}
    </Box>
  );
}
