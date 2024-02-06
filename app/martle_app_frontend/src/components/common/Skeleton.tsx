import { Stack, Skeleton, SxProps } from "@mui/material";

interface Props {
  width?: number;
  height?: number;
  vrint: string;
  sx?: SxProps;
}

export default function AppSkeleton({ width, height, vrint, sx }: Props) {
  const variant = vrint as "text" | "rectangular" | "rounded" | "circular";

  return (
    <Stack sx={{ ...sx }} spacing={1}>
      <Skeleton variant={variant} width={width} height={height} />
    </Stack>
  );
}
