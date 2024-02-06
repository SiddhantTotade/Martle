import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Box, Card, CircularProgress, Typography } from "@mui/material";

import Image from "../common/Image";
import NoFavorites from "./NoFavorites";
import AppContainer from "../common/Container";
import PrirmaryButton from "../common/PrirmaryButton";
import { extractProductId } from "../common/utils/helperFunctions";
import { useGetFavoritesQuery } from "@/redux/services/appApiSlice";
import { useRemoveFromFavorite } from "@/hooks/app/removeFromFavorite";
import MobileFavorite from "./MobileFavorite";

export default function Favorite() {
  const user = useSelector((state: RootState) => state.user);
  const { onSubmit, isLoading } = useRemoveFromFavorite();
  const { data } = useGetFavoritesQuery(undefined);
  const navigate = useNavigate();
  const productIds = extractProductId(data ? data?.data : []);

  return (
    <>
      {data?.data.length === 0 ? (
        <NoFavorites />
      ) : (
        <AppContainer
          sx={{
            mt: "6rem",
            display: "grid",
            gap: "10px",
            "@media(max-width:800px)": {
              display: "block",
              mt: 1,
              width: "95%",
            },
          }}
        >
          <PrirmaryButton
            onClick={() => onSubmit({ user: user.id, product: productIds })}
            sx={{
              width: "15%",
              mt: 2,
              "@media(max-width:800px)": {
                width: "100%",
              },
            }}
            label="Empty Favorites"
          />
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "10px",
              "@media(max-width:1400px)": {
                gridTemplateColumns: "repeat(4, 1fr)",
              },
              "@media(max-width:1100px)": {
                gridTemplateColumns: "repeat(3, 1fr)",
              },
              "@media(max-width:800px)": {
                // width: "100%",
                display: "none",
              },
            }}
          >
            {data?.data.map((product, index) => (
              <Card
                elevation={5}
                sx={{
                  width: "100%",
                  display: "grid",
                  gap: "5px",
                  p: 1,
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
                    onClick={() =>
                      onSubmit({ user: user.id, product: product.id })
                    }
                    label="Remove"
                    variant="contained"
                  />
                )}
              </Card>
            ))}
          </Box>
          <MobileFavorite />
        </AppContainer>
      )}
    </>
  );
}
