import AppLinks from "@/components/common/Links";
import AuthLayout from "@/layouts/AuthLayout";

export default function LoginRequired() {
  return (
    <AuthLayout title="Login Required">
      <AppLinks href="/auth/login">Login</AppLinks>
    </AuthLayout>
  );
}
