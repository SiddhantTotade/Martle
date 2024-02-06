import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Box, Typography, CircularProgress } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import PrirmaryButton from "../common/PrirmaryButton";
import ActionContainer from "../common/ActionContainer";
import SkeletonProductCard from "../common/ui/skeletons/SkeletonProductCard";
import { convertToINR } from "../common/utils/helperFunctions";
import { useRemoveFromCart } from "@/hooks/app/removeFromCart";
import ProductQuantity from "@/components/checkout/ProductQuantity";

interface Props {
  getIsLoading?: boolean;
  data?: any;
}

export default function CartItems({ getIsLoading, data }: Props) {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const { onSubmit, isLoading: removeItem } = useRemoveFromCart();

  return (
    <Box sx={{ flex: "1", display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {getIsLoading ? (
        <SkeletonProductCard />
      ) : (
        <>
          {data?.data.data.map((product, index) => (
            <ProductCard
              key={index}
              elevation={5}
              sx={{
                width: "calc(20% - 40px)",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                marginLeft: "27%",
                p: 1,
                gap: "10px",
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
                <ProductQuantity />
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
