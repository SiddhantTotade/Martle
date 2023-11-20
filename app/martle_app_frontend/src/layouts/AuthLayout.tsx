import { Typography, Card, Box } from "@mui/material";
import Blob from "@/assets/svg/Blob";

interface AuthLaytoutProps {
  children?: any;
  title?: string;
}

export default function AuthLayout({ title, children }: AuthLaytoutProps) {
  return (
    <Card
      sx={{
        display: "grid",
        justifyItems: "center",
        width: "25%",
        minWidth: "25%",
        maxWidth: "30%",
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        padding: "10px",
        gap: "20px",
      }}
      elevation={8}
    >
      <Blob />
      <Typography variant="appName">Martle</Typography>
      <Typography variant="componentTitle">{title}</Typography>
      {children}
    </Card>
  );
}
