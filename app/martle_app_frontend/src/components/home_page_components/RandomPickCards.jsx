import { Box, Container, Typography } from "@mui/material";
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
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box
          sx={{
            width: "100%",
            height:'10vh',
            border:'2px solid red'
          }}
        >
          <img
            className="flex justify-center rounded-md"
            src="https://cdn.shopify.com/s/files/1/1459/5894/files/Black_20Orange_large.gif?v=1685102407"
            alt="img"
            width="20%"
            height="10vh"
          />
        </Box>
        {/* <Box
          sx={{
            width: "100%",
          }}
        >
          <img
            className="flex justify-center rounded-md"
            src="https://i.gifer.com/9uXq.gif"
            alt="img"
            width="20%"
          />
        </Box> */}
      </Box>
    </div>
  );
}
