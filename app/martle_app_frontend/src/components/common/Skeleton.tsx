import { Stack, Skeleton } from "@mui/material";

interface Props {
  width?: number;
  height?: number;
  vrint: string;
}

export default function AppSkeleton({ width, height, vrint }: Props) {
  const variant = vrint as "text" | "rectangular" | "rounded" | "circular";

  return (
    <Stack spacing={1}>
      <Skeleton variant={variant} width={width} height={height} />
    </Stack>
  );
}
