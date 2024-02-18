import { useEffect } from "react";
import { useDispatch } from "react-redux";

import NoCart from "./NoCart";
import CartItems from "./CartItems";
import CheckoutCart from "./CheckoutCart";
import AppContainer from "../common/Container";
import { setQuantity } from "@/redux/features/quantitySlice";
import { useGetCartQuery } from "@/redux/services/appApiSlice";
import { extractCartData } from "../common/utils/helperFunctions";

export default function Cart() {
  const { data, isLoading: getIsLoading } = useGetCartQuery(undefined);
  const productData = extractCartData(data?.data.data || []);
  const dispatch = useDispatch();

  useEffect(() => {
    productData?.map((data: any) => {
      dispatch(
        setQuantity({
          product_id: data.product_id,
          product_discounted_price: data.product_discounted_price,
          product_selling_price: data.product_selling_price,
          quantity: data.quantity,
        })
      );
    });
  }, [productData, dispatch]);

  return (
    <>
      {data?.data.data.length === 0 ? (
        <NoCart />
      ) : (
        <AppContainer
          sx={{
            mt: "6rem",
            display: "flex",
            gap: "20px",
          }}
        >
          <CheckoutCart getIsLoading={getIsLoading} data={data} />
          <CartItems getIsLoading={getIsLoading} data={data} />
        </AppContainer>
      )}
    </>
  );
}
