import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Box, Typography, CircularProgress } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import AppContainer from "../common/Container";
import ProductCarousel from "../common/Carousel";
import PrirmaryButton from "../common/PrirmaryButton";
import SkeletonProductCard from "../common/ui/skeletons/SkeletonProductCard";

interface Props {
  data?: any;
  getFavoriteIsLoading: boolean;
  removeFavoriteIsLoading: boolean;
  onSubmit: any;
}

export default function MobileFavoriteItems({
  data,
  getFavoriteIsLoading,
  removeFavoriteIsLoading,
  onSubmit,
}: Props) {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      {getFavoriteIsLoading ? (
        <SkeletonProductCard />
      ) : (
        <AppContainer
          sx={{
            display: "none",
            mt: 0,
            "@media(max-width:600px)": {
              display: "flex",
            },
          }}
        >
          <ProductCarousel>
            {data?.map((product: any, index: number) => (
              <ProductCard
                elevation={5}
                sx={{
                  display: "grid",
                  gap: "5px",
                  p: 1,
                  "@media(max-width:600px)": {
                    width: "90%",
                  },
                }}
                key={index}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid",
                    borderRadius: "5px",
                    p: 1,
                  }}
                >
                  <Image
                    src={`http://127.0.0.1:8000${product.product_cover_image}`}
                    alt="product_image"
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "5px",
                      objectFit: "scale-down",
                    }}
                  />
                </Box>
                <Box sx={{ display: "grid", gap: "5px" }}>
                  <Typography
                    onClick={() => navigate(`/product/${product.product_slug}`)}
                    sx={{
                      display: "inline-block",
                      width: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#64b5f6",
                      },
                    }}
                    fontSize="small"
                  >
                    {product.product_title}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "end",
                      gap: "10px",
                    }}
                  >
                    <Typography>₹{product.product_discounted_price}</Typography>
                    <del style={{ fontSize: "13px" }}>
                      ₹{product.product_selling_price}
                    </del>
                  </Box>
                </Box>
                {removeFavoriteIsLoading ? (
                  <CircularProgress />
                ) : (
                  <PrirmaryButton
                    onClick={() =>
                      onSubmit({ user: user.id, product: product.id })
                    }
                    label="Remove"
                    variant="contained"
                  />
                )}
              </ProductCard>
            ))}
          </ProductCarousel>
        </AppContainer>
      )}
    </>
  );
}
