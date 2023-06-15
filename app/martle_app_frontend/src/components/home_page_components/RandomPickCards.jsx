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
        <Box sx={{ position: "relative", width: "100%", borderRadius: "5px" }}>
          <img
            className="block rounded-md"
            src="https://cdn.shopify.com/s/files/1/1459/5894/files/Black_20Orange_large.gif?v=1685102407"
            alt="img"
            width="18%"
          />
          <Box
            sx={{
              width: 280,
              height: "280px",
              top: 0,
              left: 0,
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              opacity: 0,
              background: "rgba(0,0,0,0.6)",
              transition: "0.6s",
              ":hover": { opacity: 1 },
            }}
          >
            <Typography
              fontWeight={20}
              fontStyle="oblique"
              fontFamily="serif"
              fontSize={30}
              sx={{ color: "#fff" }}
            >
              Ride Safe
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
