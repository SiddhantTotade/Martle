import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";

import SecondaryButton from "../common/SecondaryButton";

export default function ProductAddPurchase() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "10px",
        marginTop: "15px",
      }}
    >
      <SecondaryButton
        variant="outlined"
        sx={{
          height: "7vh",
          width: "80%",
          gap: "10px",
        }}
      >
        <ShoppingCartIcon />
        Add to cart
      </SecondaryButton>
      <SecondaryButton
        variant="contained"
        sx={{
          height: "7vh",
          width: "80%",
          gap: "10px",
        }}
      >
        <ShopIcon />
        Buy now
      </SecondaryButton>
    </Box>
  );
}
