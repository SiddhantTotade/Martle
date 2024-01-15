import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface ButtonTypes extends ButtonProps {
  children: ReactNode;
}

export default function SecondaryButton({
  type,
  children,
  ...otherProps
}: ButtonTypes) {
  return (
    <Button
      variant="contained"
      type={type || "submit"}
      {...otherProps}
      fullWidth
    >
      {children}
    </Button>
  );
}
