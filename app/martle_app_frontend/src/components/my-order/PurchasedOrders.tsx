import { useState } from "react";
import { Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

import OrderCard from "./OrderCard";
import OrderFilter from "./OrderFilter";
import AppContainer from "../common/Container";
import { useGetPurchasedOrdersQuery } from "@/redux/services/appApiSlice";

export default function PurchasedOrders() {
  const [elevations, setElevations] = useState({} || 0);
  const { data } = useGetPurchasedOrdersQuery(undefined);
  const navigate = useNavigate();

  const handleCardHover = (index: number, elevate: number) => {
    setElevations((prevElevations) => ({
      ...prevElevations,
      [index]: elevate,
    }));
  };

  return (
    <AppContainer
      sx={{
        width: "95%",
        display: "flex",
        gap: "20px",
        position: "relative",
        mt: "6rem",
        "@media(max-width:1360px)": {
          width: "90%",
        },
        "@media(max-width:1230px)": {
          width: "100%",
        },
        "@media(max-width:1080px)": {
          display: "grid",
          width: "95%",
          overflow: "hidden",
          mt: 7,
        },
        "@media(max-width:600px)": {
          mt: -1,
        },
      }}
    >
      <Box
        sx={{
          width: "40%",
          height: "20vh",
          border: "1px solid",
          borderRadius: "5px",
          p: 2,
          "@media(max-width:600px)": {
            width: "85%",
            mt: 10,
            height: "16vh",
          },
        }}
      >
        <OrderFilter />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 0fr))",
          justifyContent: "center",
          width: "100%",
          gridRowGap: "10px",
        }}
      >
        {data?.data.map((order: any, index: number) => (
          <Card
            key={index}
            elevation={elevations[index] || 0}
            sx={{
              width: "85%",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid black",
              borderRadius: 0,
              "&:hover": {
                border: "1px solid",
                borderRadius: 1,
              },
              p: 1,
            }}
            onClick={() => navigate(order.order_slug)}
            onMouseEnter={() => handleCardHover(index, 5)}
            onMouseLeave={() => handleCardHover(index, 0)}
          >
            <OrderCard
              dateTime={order.ordered_datetime}
              quantity={order.quantity}
              status={order.status.product_status}
              product={order.product}
            />
          </Card>
        ))}
      </Box>
    </AppContainer>
  );
}
