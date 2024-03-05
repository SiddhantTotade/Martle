import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";

import ProductCard from "../common/Card";
import SecondaryButton from "../common/SecondaryButton";
import AddressCard from "../common/order-product/AddressCard";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentOptions from "@/components/checkout/PaymentOptions";
import SkeletonAddressCard from "../common/ui/skeletons/SkeletonAddressCard";
import { useEffect } from "react";
import { setAddressId } from "@/redux/features/placeOrderSlice";

interface Props {
  getIsLoading?: boolean;
  data?: any;
}

export default function CheckoutCart({ data, getIsLoading }: Props) {
  const checkout = useSelector((state: RootState) => state.checkout);
  const proceedPayment = useSelector((state: RootState) => state.checkout);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setAddressId(data?.data.address.id));
  });

  return (
    <>
      {getIsLoading ? (
        <SkeletonAddressCard />
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            flex: "0 0 25%",
            gap: "10px",

          }}
        >
          <ProductCard elevation={5} sx={{ p: 1, border: "1px solid" }}>
            <AddressCard
              address={data?.data.address.address}
              locality={data?.data.address.locality}
              city={data?.data.address.city}
              state={data?.data.address.state}
              country={data?.data.address.country}
              zipcode={data?.data.address.zipcode}
            />
          </ProductCard>
          <PaymentOptions
            sx={{
              border: "1px solid",
              width: "100%",
              borderRadius: "5px",
              m: 0,
              p: 1,
            }}
          />
          <ProductCard elevation={5} sx={{ p: 1, border: "1px solid" }}>
            <OrderSummary
              orderSummaryType="cart"
              discount_price={data?.data.data[0].product_discounted_price}
            />
          </ProductCard>
          <SecondaryButton
            onClick={() => {
              proceedPayment.paymentMethod === "Martlet" ||
              proceedPayment.paymentMethod === "Cash on delivery"
                ? navigate("/pay/proceed")
                : proceedPayment.paymentMethod === "Stripe"
                ? navigate("/payment/proceed")
                : "";
            }}
            disabled={checkout.paymentMethod === "" ? true : false}
          >
            Confirm & Place Order
          </SecondaryButton>
        </Box>
      )}
    </>
  );
}
