import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import SecondaryButton from "../common/SecondaryButton";

export default function ProductAddPurchase() {
  const navigate = useNavigate();
  const { slug } = useParams();

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
        onClick={() => navigate(`/buy-order/proceed/${slug}`)}
      >
        <ShopIcon />
        Buy now
      </SecondaryButton>
    </Box>
  );
}
