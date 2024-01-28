import { PropsWithChildren, Suspense } from "react";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};
