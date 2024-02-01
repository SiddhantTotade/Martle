import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCheckoutAddress } from "@/redux/features/checkoutSlice";

export const useCheckoutAddress = (data: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const hasActiveAddress = data?.data?.some(
      (address: any) => address.is_active === true
    );

    if (hasActiveAddress) {
      dispatch(setCheckoutAddress(hasActiveAddress));
    }
  }, [data, dispatch]);
};
