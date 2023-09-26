import { Box, Button } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShopIcon from "@mui/icons-material/Shop";

const ProductAddPurchase = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "10px",
        marginTop: "15px",
      }}
    >
      <Button
        sx={{
          height: "7vh",
          width: "80%",
          background: "#fc3838",
          color: "white",
          gap: "10px",
          ":hover": { background: "#d43131" },
        }}
      >
        <ShoppingCartIcon />
        Add to cart
      </Button>
      <Button
        sx={{
          height: "7vh",
          width: "80%",
          background: "#348ee3",
          color: "white",
          gap: "10px",
          ":hover": { background: "#3083d1" },
        }}
      >
        <ShopIcon />
        Buy now
      </Button>
    </Box>
  );
};

export default ProductAddPurchase;
