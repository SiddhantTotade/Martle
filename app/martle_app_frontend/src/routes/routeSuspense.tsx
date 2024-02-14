import { PropsWithChildren, Suspense } from "react";

export const RouteSuspense = ({ children }: PropsWithChildren) => {
  return <Suspense>{children}</Suspense>;
};
