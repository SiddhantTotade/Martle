import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCheckoutAddress } from "@/redux/features/checkoutSlice";
import { setAddressId } from "@/redux/features/placeOrderSlice";

export const useCheckoutAddress = (data: any) => {
  const dispatch = useDispatch();
  const activeAddress = data?.data?.find((address) => address.is_active);
  const activeAddressId = activeAddress ? activeAddress.id : -1;

  useEffect(() => {
    dispatch(setAddressId(activeAddressId));
  });

  useEffect(() => {
    const hasActiveAddress = data?.data?.some(
      (address: any) => address.is_active === true
    );

    if (hasActiveAddress) {
      dispatch(setCheckoutAddress(hasActiveAddress));
    }
  }, [data, dispatch]);
};
