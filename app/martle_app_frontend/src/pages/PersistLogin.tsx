import { PropsWithChildren, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "@/hooks/auth/auth";
import useAxiosPrivate from "@/hooks/auth/axiosPrivate";
import useRefreshToken from "@/hooks/auth/refreshToken";

export default function PersistLogin({ children }: PropsWithChildren) {
  const refresh = useRefreshToken();
  const { accessToken, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;

    async function verifyUser() {
      try {
        await refresh();
        const { data } = await axiosPrivate.get("/profile/");
        setUser(data);
      } catch (error) {
        console.log(error?.response);
      } finally {
        isMounted && setLoading(false);
      }
    }

    !accessToken ? verifyUser() : setLoading(false);

    return () => {
      isMounted = false;
    };
  }, []);

  return loading ? "Loading" : <Outlet />;
}
