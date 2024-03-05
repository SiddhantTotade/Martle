import { useEffect } from "react";
import { useDispatch } from "react-redux";

import NoCart from "./NoCart";
import CartItems from "./CartItems";
import CheckoutCart from "./CheckoutCart";
import AppContainer from "../common/Container";
import { setQuantity } from "@/redux/features/quantitySlice";
import { useGetCartQuery } from "@/redux/services/appApiSlice";
import {
  checkoutProductCartData,
  extractCartData,
} from "../common/utils/helperFunctions";
import MobileCartItems from "./MobileCartItems";
import { setProductCartData } from "@/redux/features/checkoutProductDataSlice";

export default function Cart() {
  const { data, isLoading: getIsLoading } = useGetCartQuery(undefined);
  const productCartData = checkoutProductCartData(data?.data.data);
  const productData = extractCartData(data?.data.data || []);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    productData?.map((data: any) => {
      if (isMounted) {
        dispatch(
          setQuantity({
            product_id: data.product_id,
            product_discounted_price: data.product_discounted_price,
            product_selling_price: data.product_selling_price,
            quantity: data.quantity,
          })
        );
      }
    });

    return () => {
      isMounted = false;
    };
  }, [productData, dispatch]);

  useEffect(() => {
    dispatch(setProductCartData(productCartData));
  }, [productCartData, dispatch]);

  return (
    <>
      {data?.data.data.length === 0 ? (
        <NoCart />
      ) : (
        <AppContainer
          sx={{
            mt: 10,
            display: "flex",
            gap: "20px",
            "@media(max-width:600px)": {
              mt: 3,
              flexDirection: "column-reverse",
            },
          }}
        >
          <CheckoutCart getIsLoading={getIsLoading} data={data} />
          <CartItems getIsLoading={getIsLoading} data={data} />
          <MobileCartItems getIsLoading={getIsLoading} data={data} />
        </AppContainer>
      )}
    </>
  );
}
