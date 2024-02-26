import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCheckoutAddress } from "@/redux/features/checkoutSlice";
import { setAddressId } from "@/redux/features/placeOrderSlice";
import { extractAddressId } from "../helperFunctions";

export const useCheckoutAddress = (data: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddressId(extractAddressId(data)));
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
