import { Box } from "@mui/material";
import AppSkeleton from "@/components/common/Skeleton";

export default function CardSkeleton() {
  return (
    <Box sx={{ display: "flex", gap: "30px" }}>
      {Array.from({ length: 7 }).map((_, id) => (
        <Box key={id} sx={{ display: "grid", gap: "10px" }}>
          <AppSkeleton width={200} height={250} vrint="rounded" />
          <AppSkeleton width={170} height={10} vrint="rounded" />
          <AppSkeleton width={100} height={10} vrint="rounded" />
        </Box>
      ))}
    </Box>
  );
}
