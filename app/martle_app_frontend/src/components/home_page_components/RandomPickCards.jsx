import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";

export default function RandomCardsPick() {
  return (
    <div className="w-RandomCards m-auto mt-12">
      <Typography
        fontSize={30}
        sx={{
          color: "#fff",
          marginLeft: "10px",
          marginBottom: "5px",
          letterSpacing: "2px",
          fontFamily: "fantasy",
        }}
      >
        Tools you might Need
      </Typography>
      <Box sx={{ width: "90%", display: "flex", gap: "10px" }}>
        <img
          src="https://cdn.shopify.com/s/files/1/1459/5894/files/Black_20Orange_large.gif?v=1685102407"
          alt="img"
          width="18%"
          height="8vh"
        />
      </Box>
    </div>
  );
}
