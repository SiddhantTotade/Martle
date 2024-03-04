import { Box } from "@mui/material";
import AppSkeleton from "@/components/common/Skeleton";

export default function MobileCardSkeleton() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        mt: 6,
      }}
    >
      <AppSkeleton width={400} height={250} vrint="rounded" />
    </Box>
  );
}
