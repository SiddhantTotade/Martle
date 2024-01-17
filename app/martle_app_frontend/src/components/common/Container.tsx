import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  sx?: SxProps;
}

export default function AppContainer({ children, sx }: Props) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ width: "95%", mt: 5, ...sx }}
    >
      {children}
    </Container>
  );
}
