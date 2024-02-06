import { Box } from "@mui/material";

import AppSkeleton from "../../Skeleton";
import ProductCard from "../../Card";

export default function SkeletonAddressCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "96%",
        position: "absolute",
      }}
    >
      {[...Array(3)].map((_, index) => (
        <ProductCard
          key={index}
          elevation={5}
          sx={{
            width: "25%",
            display: "grid",
            alignItems: "center",
            gap: "10px",
            p: 1,
          }}
        >
          {[...Array(6)].map((_, inIndex) => (
            <AppSkeleton
              key={inIndex}
              height={20}
              width={350}
              vrint="rounded"
            />
          ))}
        </ProductCard>
      ))}
    </Box>
  );
}
