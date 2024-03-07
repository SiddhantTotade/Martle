import { Box } from "@mui/material";

import ProductCard from "../../Card";
import AppSkeleton from "../../Skeleton";

export default function SkeletonProductCard() {
  const windowSize = window.innerWidth;

  return (
    <Box
      sx={{
        position: "relative",
        left: window.location.pathname.includes("favorites") ? 0 : "44%",
        display: "flex",
        justifyContent: "center",
        flex: "wrap",
        gap: "10px",
        "@media(max-width:600px)": {
          mt: 0,
          left: 0,
          width: "100%",
        },
      }}
    >
      {[...Array(windowSize > 600 ? 4 : 1)].map((_, index) => (
        <ProductCard
          key={index}
          elevation={5}
          sx={{
            width: "100%",
            display: "grid",
            gap: "10px",
            p: 1,
            "@media(max-width:600px)": {
              width: "50.5%",
              left: 0,
              mt: 2,
            },
          }}
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
