import React from "react";
import { Typography } from "@mui/material";
import "../../../index.css";

const Title = () => {
  return (
    <div className="flex justify-center items-center">
      <Typography
        sx={{
          fontFamily: '"Parisienne", cursive',
          fontSize: 65,
          color: "#f5b002",
          "@media screen and (max-width:500px)": { fontSize: "40px" },
        }}
      >
        From Couple to Partner
      </Typography>
    </div>
  );
};

export default Title;
