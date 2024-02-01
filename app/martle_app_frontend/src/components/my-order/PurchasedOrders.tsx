import { useState } from "react";
import { TextField, Box, Card } from "@mui/material";

import AppContainer from "../common/Container";
import OrderCard from "./OrderCard";
import { useGetPurchasedOrdersQuery } from "@/redux/services/appApiSlice";

export default function PurchasedOrders() {
  const [elevations, setElevations] = useState({});
  const { data } = useGetPurchasedOrdersQuery(undefined);

  const handleCardHover = (index: number, elevate: number) => {
    setElevations((prevElevations) => ({
      ...prevElevations,
      [index]: elevate,
    }));
  };

  return (
    <AppContainer
      sx={{ width: "80%", display: "flex", gap: "20px", mt: "6rem" }}
    >
      <Box
        sx={{ width: "30%", border: "1px solid", borderRadius: "5px", p: 1 }}
      >
        <TextField fullWidth size="small" label="Search" />
      </Box>
      <Box
        sx={{
          display: "grid",
          width: "50%",
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
