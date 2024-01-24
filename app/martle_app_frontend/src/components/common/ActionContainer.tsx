import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  sx?: SxProps;
  children: ReactNode;
}

export default function ActionContainer({ children, sx }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
