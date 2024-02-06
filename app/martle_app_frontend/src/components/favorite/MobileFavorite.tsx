import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Card, Box, Typography, CircularProgress } from "@mui/material";

import Image from "../common/Image";
import AppContainer from "../common/Container";
import ProductCarousel from "../common/Carousel";
import PrirmaryButton from "../common/PrirmaryButton";
import { useGetFavoritesQuery } from "@/redux/services/appApiSlice";
import { useRemoveFromFavorite } from "@/hooks/app/removeFromFavorite";
import ProductCard from "../common/Card";

export default function MobileFavorite() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  const { data } = useGetFavoritesQuery(undefined);
  const { onSubmit, isLoading } = useRemoveFromFavorite();

  console.log(data?.data.map((product, index) => product.product_title));

  return (
    // <AppContainer
    //   sx={{
    //     display: "none",
    //     "@media(max-width:800px)": {
    //       display: "block",
    //       ml: 0,
    //       width: "100%",
    //     },
    //   }}
    // >
    <ProductCarousel>
      {data?.data.map((i: any, id: any) => (
        <ProductCard key={id} elevation={5}>
          {i.product_title}
        </ProductCard>
      ))}
      {/* {data?.data.map((product: any, index: number) => (
        <Card
          elevation={5}
          sx={{
            width: "100%",
            display: "grid",
            gap: "5px",
            p: 1,
            "@media(max-width:600px)": {
              width: "95%",
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
          {isLoading ? (
            <CircularProgress />
          ) : (
            <PrirmaryButton
              onClick={() => onSubmit({ user: user.id, product: product.id })}
              label="Remove"
              variant="contained"
            />
          )}
        </Card>
      ))} */}
    </ProductCarousel>
    // </AppContainer>
  );
}
