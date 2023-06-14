import React from "react";
import Title from "./wedding_components/Title";
import { Box } from "@mui/material";
import MensCarousel from "./wedding_components/MensCarousel";

const Wedding = () => {
  return (
    <div className="border-2 border-red-600 mt-12">
      <Title />
      <Box>
        <MensCarousel />
      </Box>
    </div>
  );
};

export default Wedding;
