import AuthLayout from "@/layouts/AuthLayout";
import { Typography } from "@mui/material";

export default function NotFoundPage() {
  return (
    <AuthLayout title="404 - Page not found">
      <Typography component="h1">
        The page you are looking for doesn't exist.
      </Typography>
    </AuthLayout>
  );
}
