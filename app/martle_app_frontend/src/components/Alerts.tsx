import { Alert, Snackbar } from "@mui/material";

interface AlertProps {
  label: string;
  severity: "error" | "success" | "info" | "warning";
}

export default function AppAlerts({ severity, label }: AlertProps) {
  return (
    <Snackbar
      sx={{ verticalAlign: "bottom" }}
      open={true}
      autoHideDuration={6000}
      onClose={undefined}
    >
      <Alert severity={severity}>{label}</Alert>
    </Snackbar>
  );
}
