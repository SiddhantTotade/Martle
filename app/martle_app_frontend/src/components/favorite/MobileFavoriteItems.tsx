import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Box, Typography, CircularProgress } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import AppContainer from "../common/Container";
import ProductCarousel from "../common/Carousel";
import PrirmaryButton from "../common/PrirmaryButton";
import { shortText } from "../common/utils/helperFunctions";
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
              mt: -5,
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
                    width: "85%",
                  },
                }}
                key={index}
              >
                <Image
                  src={`http://127.0.0.1:8000${product.product_cover_image}`}
                  alt="product_image"
                  sx={{ border: "1px solid", borderRadius: "5px", p: 1 }}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "5px",
                    objectFit: "scale-down",
                  }}
                />
                <Box sx={{ display: "grid", gap: "5px" }}>
                  <Typography
                    onClick={() => navigate(`/product/${product.product_slug}`)}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "#64b5f6",
                      },
                    }}
                    fontSize="small"
                  >
                    {shortText(product.product_title, 90)}...
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "end",
                      gap: "20px",
                    }}
                  >
                    <Typography fontSize="large" fontWeight={600}>
                      ₹{product.product_discounted_price}
                    </Typography>
                    <del style={{ fontSize: "15px" }}>
                      ₹{product.product_selling_price}
                    </del>
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
                  </Box>
                </Box>
              </ProductCard>
            ))}
          </ProductCarousel>
        </AppContainer>
      )}
    </>
  );
}
