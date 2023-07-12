import React from "react";
import Title from "./wedding_components/Title";
import { Box } from "@mui/material";
import MensCarousel from "./wedding_components/MensCarousel";
import WomensCarousel from "./wedding_components/WomensCarousel";

const Wedding = (props) => {
  console.log(props);
  return (
    <div className="p-2 bg-black mt-12">
      <Title />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        <MensCarousel him_product={props.him_product} />
        <WomensCarousel her_product={props.her_product} />
      </Box>
    </div>
  );
};

export default Wedding;
