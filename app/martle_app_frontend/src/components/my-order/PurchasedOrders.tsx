import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card } from "@mui/material";

import AppContainer from "../common/Container";
import OrderCard from "./OrderCard";
import { useGetPurchasedOrdersQuery } from "@/redux/services/appApiSlice";
import OrderFilter from "./OrderFilter";

export default function PurchasedOrders() {
  const [elevations, setElevations] = useState({});
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
        width: "80%",
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
          width: "20.8%",
          height: "15.2vh",
        }}
      >
        <OrderFilter />
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "600px",
          gap: "10px",
        }}
      >
        {data?.data.map((order: any, index: number) => (
          <Card
            key={index}
            elevation={elevations[index] || 0}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              height: "19vh",
              borderRadius: 0,
              p: 1,
            }}
            onClick={() => navigate(order.product.product_slug)}
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
