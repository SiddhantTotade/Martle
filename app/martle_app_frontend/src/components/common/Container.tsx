import { Container, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  sx?: SxProps;
}

export default function AppContainer({ children, id, sx }: Props) {
  return (
    <Container
      id={id}
      disableGutters
      maxWidth={false}
      sx={{ width: "95%", mt: 5, ...sx }}
    >
      {children}
    </Container>
  );
}
