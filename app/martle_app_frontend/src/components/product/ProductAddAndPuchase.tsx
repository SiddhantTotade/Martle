import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import ShopIcon from "@mui/icons-material/Shop";
import { useNavigate, useParams } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import SecondaryButton from "../common/SecondaryButton";
import AddToFavoriteButton from "../favorite/AddToFavoriteButton";
import { RootState } from "@reduxjs/toolkit/query";
import { useAddToCart } from "@/hooks/app/addToCart";
import { useRemoveFromCart } from "@/hooks/app/removeFromCart";

export default function ProductAddPurchase() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { onSubmit: addCart, isLoading: addIsLaoding } = useAddToCart();
  const { onSubmit: removeCart, isLoading: removeIsLoading } =
    useRemoveFromCart();
  const cart = useSelector((state: RootState) => state.favorite_cart);
  const user = useSelector((state: RootState) => state.user);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "10px",
        marginTop: "15px",
        position: "relative",
      }}
    >
      <AddToFavoriteButton />
      {cart.cartToUser?.length === 0 ? (
        <SecondaryButton
          variant="contained"
          sx={{
            height: "7vh",
            width: "80%",
            gap: "10px",
          }}
          onClick={() => addCart({ user: user.id, product: cart.cart })}
        >
          {removeIsLoading || addIsLaoding ? (
            <CircularProgress size="small" sx={{ color: "#fff" }} />
          ) : (
            <>
              <ShoppingCartIcon />
              Add to cart
            </>
          )}
        </SecondaryButton>
      ) : (
        <SecondaryButton
          variant="contained"
          sx={{
            height: "7vh",
            width: "80%",
            gap: "10px",
          }}
          onClick={() => removeCart({ user: user.id, product: cart.cart })}
        >
          <RemoveShoppingCartIcon />
          Remove
        </SecondaryButton>
      )}
      <SecondaryButton
        variant="contained"
        sx={{
          height: "7vh",
          width: "80%",
          gap: "10px",
        }}
        onClick={() => navigate(`/buy-order/proceed/${slug}`)}
      >
        <ShopIcon />
        Buy now
      </SecondaryButton>
    </Box>
  );
}
