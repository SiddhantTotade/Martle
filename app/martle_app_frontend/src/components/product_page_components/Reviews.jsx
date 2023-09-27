import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarIcon from "@mui/icons-material/Star";

const Reviews = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <AccountCircleIcon sx={{ color: "#B0B0B0", fontSize: "40px" }} />
          <Typography fontSize={14}>Siddhant</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box>
            <Typography fontSize={12} fontWeight={"bold"}>
              {new Date().toLocaleDateString()}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              background: "green",
              color: "white",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            <Typography fontSize={13}>5</Typography>
            <StarIcon sx={{ fontSize: "12px" }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Typography fontSize={13}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
          asperiores sit? Id sunt temporibus saepe nemo, culpa veritatis labore
          ullam modi veniam quae sint cupiditate adipisci cumque unde quos vitae
          ea ratione eaque doloremque aperiam aliquid rerum fugit dolore! Libero
          quas esse eveniet ad in odit, voluptatum dignissimos cumque hic.
        </Typography>
      </Box>
    </Box>
  );
};

export default Reviews;
