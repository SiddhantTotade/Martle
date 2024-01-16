import { Box } from "@mui/material";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: string;
  height: null | string;
}

export default function Image({
  src,
  width,
  height,
  alt,
  ...otherProps
}: Props) {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        borderRadius: "3px",
        background: "#fff",
      }}
    >
      <img src={src} alt={alt} {...otherProps} />
    </Box>
  );
}
