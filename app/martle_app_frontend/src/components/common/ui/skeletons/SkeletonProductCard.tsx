import { Box } from "@mui/material";

import ProductCard from "../../Card";
import AppSkeleton from "../../Skeleton";

export default function SkeletonCard() {
  return (
    <Box
      sx={{
        position: "relative",
        left: "27%",
        display: "flex",
        flex: "wrap",
        gap: "10px",
      }}
    >
      {[...Array(4)].map((_, index) => (
        <ProductCard
          key={index}
          elevation={5}
          sx={{ width: "100%", display: "grid", gap: "10px", p: 1 }}
        >
          <AppSkeleton height={190} width={200} vrint="rounded" />
          <AppSkeleton height={10} width={190} vrint="rounded" />
          <AppSkeleton height={10} width={170} vrint="rounded" />
          <AppSkeleton height={10} width={150} vrint="rounded" />
          <AppSkeleton height={20} width={200} vrint="rounded" />
        </ProductCard>
      ))}
    </Box>
  );
}
