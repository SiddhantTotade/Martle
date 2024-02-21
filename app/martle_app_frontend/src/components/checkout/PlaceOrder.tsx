import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Box, Typography, Divider } from "@mui/material";

import Image from "../common/Image";
import OrderSummary from "./OrderSummary";
import AppContainer from "../common/Container";
import ProductQuantity from "./ProductQuantity";
import { setQuantity } from "@/redux/features/quantitySlice";
import AddressCard from "../common/order-product/AddressCard";
import { setAddressData } from "@/redux/features/checkoutProductDataSlice";
import { useProductForPlaceOrderQuery } from "@/redux/services/appApiSlice";
import {
  checkoutAddressData,
  deliveryDate,
  extractCartData,
} from "../common/utils/helperFunctions";

export default function PlaceOrder() {
  const { slug } = useParams();
  const { data } = useProductForPlaceOrderQuery(slug);
  const productData = extractCartData(data?.data || []);
  const dispatch = useDispatch();
  const address_data = checkoutAddressData(
    data?.address[0].address,
    data?.address[0].locality,
    data?.address[0].city,
    data?.address[0].state,
    data?.address[0].country,
    data?.address[0].zipcode
  );

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

  useEffect(() => {
    dispatch(setAddressData(address_data));
  });

  return (
    <AppContainer>
      <Card
        elevation={5}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          p: 2,
          "@media (max-width: 1430px)": {
            display: "grid",
            width: "100%",
          },
        }}
      >
        <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid",
              borderRadius: "3px",
              background: "#fff",
              p: 1,
            }}
          >
            <Image
              src={`http://127.0.0.1:8000${data?.data[0].product_cover_image}`}
              alt="product_image"
              style={{ width: "100px" }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Typography color="green" fontWeight="bold">
              Guaranteed delivery :{" "}
              {deliveryDate(
                new Date().toUTCString(),
                data?.data[0].product_discounted_price
              )}
            </Typography>
            <Typography>{data?.data[0].product_title}</Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <Typography fontWeight="bold" fontSize="medium">
                ₹{data?.data[0].product_discounted_price}
              </Typography>
              <del style={{ fontSize: "13px" }}>
                ₹{data?.data[0].product_selling_price}
              </del>
            </Box>
            <ProductQuantity product_id={data?.data[0].id} />
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          sx={{
            width: "60%",
            "@media (max-width: 1430px)": {
              display: "grid",
              width: "100%",
            },
          }}
        >
          <AddressCard
            address={data?.address[0].address}
            locality={data?.address[0].locality}
            city={data?.address[0].city}
            state={data?.address[0].state}
            country={data?.address[0].country}
            zipcode={data?.address[0].zipcode}
          />
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          sx={{
            width: "40%",
            "@media (max-width: 1430px)": {
              display: "grid",
              width: "100%",
            },
          }}
        >
          <OrderSummary
            product_title={data?.data[0].product_title}
            discount_price={data?.data[0].product_discounted_price}
            orderSummaryType="place_order"
          />
        </Box>
      </Card>
    </AppContainer>
  );
}
