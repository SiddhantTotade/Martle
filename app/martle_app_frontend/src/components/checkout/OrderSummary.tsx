import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";

import {
  cartOrderSummary,
  checkoutProductData,
  convertToINR,
  deliveryCharges,
  orderTotal,
  productDiscount,
  productSavePrice,
} from "../common/utils/helperFunctions";
import { BouncingDots } from "@/assets/svg/BouncingDots";
import { setQuantity } from "@/redux/features/placeOrderSlice";
import { setPaymentMethod } from "@/redux/features/placeOrderSlice";
import { setProductData } from "@/redux/features/checkoutProductDataSlice";

const styleBox = {
  width: "100%",
  display: "flex",
};

const styleTypography = {
  width: "100%",
  display: "flex",
  justifyContent: "end",
};

interface Props {
  discount_price?: string | any;
  selling_price?: string | any;
  product_title?: string | any;
  payment_method?: string | any;
  orderSummaryType?: string;
  product_quantity?: string;
}

interface OrderSummaryData {
  orderTotal: string;
  deliveryCharges: number;
  productSavePrice: string;
  productDiscount: number;
  totalItems: number;
}

export default function OrderSummary({
  product_title,
  discount_price,
  selling_price,
  payment_method,
  product_quantity,
  orderSummaryType,
}: Props) {
  const [loading, setLoading] = useState(true);
  const quantity = useSelector((state: RootState) => state.quantity);
  const paymentMethod = useSelector(
    (state: RootState) => state.checkout.paymentMethod
  );
  const dispatch = useDispatch();
  const [orderSummaryData, setOrderSummaryData] =
    useState<OrderSummaryData | null>(null);

  console.log(
    convertToINR(
      orderTotal(product_quantity as unknown as number, discount_price)
    )
  );

  useEffect(() => {
    dispatch(setQuantity(quantity));
    dispatch(setPaymentMethod(paymentMethod));
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const fetchedOrderSummaryData = await cartOrderSummary(quantity);

        if (fetchedOrderSummaryData !== null) {
          const typedOrderSummaryData =
            fetchedOrderSummaryData as OrderSummaryData;

          setTimeout(() => {
            setOrderSummaryData(typedOrderSummaryData);
            setLoading(false);
          }, 2000);

          const product_data = checkoutProductData(
            typedOrderSummaryData.totalItems,
            product_title,
            discount_price,
            typedOrderSummaryData.productSavePrice,
            typedOrderSummaryData.productDiscount,
            paymentMethod,
            typedOrderSummaryData.deliveryCharges === 0
              ? "Free"
              : deliveryCharges(discount_price),
            typedOrderSummaryData.orderTotal
          );
          setTimeout(() => {
            dispatch(setProductData(product_data));
          }, 3000);
        }
      } catch (error) {
        return;
      }
    };
    fetchData();
  }, [quantity, product_title, discount_price, paymentMethod, dispatch]);

  return (
    <Box sx={{ width: "100%", display: "grid", gap: "5px" }}>
      {[
        `${orderSummaryType === "cart" ? "Item" : "Quantity"}`,
        "Shipping charges",
        "Payment method",
        "Your savings",
        "Discount",
        "Order total",
      ].map((type: string, index: number) => (
        <Box key={index} sx={styleBox}>
          <Typography sx={{ width: "100%" }} fontWeight="bold" fontSize="small">
            {type}
          </Typography>
          <Typography sx={styleTypography} fontSize="small">
            {loading ? (
              <BouncingDots />
            ) : type.includes("Quantity") || type.includes("Item") ? (
              orderSummaryData?.totalItems || product_quantity
            ) : type.includes("charges") ? (
              orderSummaryData?.deliveryCharges === 0 ? (
                "Free"
              ) : (
                convertToINR(deliveryCharges(discount_price))
              )
            ) : type.includes("method") ? (
              paymentMethod ? (
                paymentMethod
              ) : payment_method ? (
                paymentMethod || payment_method
              ) : (
                "Select a payment method"
              )
            ) : type.includes("savings") ? (
              orderSummaryData?.productSavePrice.includes("₹0.00") ? (
                convertToINR(productSavePrice(selling_price, discount_price))
              ) : (
                orderSummaryData?.productSavePrice
              )
            ) : type.includes("Discount") ? (
              orderSummaryData?.productDiscount === 0 ? (
                productDiscount(selling_price, discount_price) + "%"
              ) : (
                orderSummaryData?.productDiscount + "%"
              )
            ) : type.includes("total") ? (
              orderSummaryData?.orderTotal.includes("₹NaN") ? (
                convertToINR(
                  orderTotal(
                    product_quantity as unknown as number,
                    discount_price
                  )
                )
              ) : (
                orderSummaryData?.orderTotal
              )
            ) : (
              orderSummaryData?.orderTotal
            )}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
