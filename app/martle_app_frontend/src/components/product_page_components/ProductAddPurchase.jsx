import { Box, Button, Container, IconButton } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
      <IconButton>
        {" "}
        <FavoriteBorderIcon />
      </IconButton>
      <Button
        sx={{
          width: "100%",
          background: "#fc3838",
          color: "white",
          ":hover": { background: "#d43131" },
        }}
      >
        Add to cart
      </Button>
      <Button
        sx={{
          width: "100%",
          background: "#348ee3",
          color: "white",
          ":hover": { background: "#3083d1" },
        }}
      >
        Buy now
      </Button>
    </Box>
  );
};

export default ProductAddPurchase;
