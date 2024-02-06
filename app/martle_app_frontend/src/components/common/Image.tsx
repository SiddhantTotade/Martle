import { HTMLAttributes } from "react";
import { Box, SxProps } from "@mui/material";

interface Props extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: string;
  height?: null | string;
  sx?: SxProps;
}

export default function Image({
  src,
  width,
  height,
  alt,
  sx,
  ...otherProps
}: Props) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        borderRadius: "3px",
        background: "#fff",
        ...sx,
      }}
    >
      <img src={src} alt={alt} {...otherProps} />
    </Box>
  );
}
