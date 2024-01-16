import { Card, SxProps } from "@mui/material";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  elevation: number;
  children?: ReactNode;
  sx?: SxProps;
}

export default function ProductCard({
  elevation,
  children,
  sx,
  ...otherProps
}: Props) {
  return (
    <Card elevation={elevation} sx={sx} {...otherProps}>
      {children}
    </Card>
  );
}
