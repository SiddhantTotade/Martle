import { Card, Box, CircularProgress } from "@mui/material";

import { useGetAddressQuery } from "@/redux/services/appApiSlice";
import PrirmaryButton from "../PrirmaryButton";
import AppContainer from "../Container";
import EditAddress from "./EditAddress";
import SaveAddress from "./SaveAddress";
import AddressCard from "./AddressCard";
import { useChangeShippingAddress } from "@/hooks/app/changeShippingAddress";
import { useCheckoutAddress } from "../utils/hooks/checkCheckout";

export default function Address() {
  const { data } = useGetAddressQuery(undefined);
  const { onSubmit, isLoading } = useChangeShippingAddress();

  useCheckoutAddress(data ? data : "");

  return (
    <AppContainer
      sx={{
        mt: 2,
        "@media (max-width: 1190px)": {
          width: "100%",
        },
      }}
    >
      {data?.data.length <= 2 && <SaveAddress />}
      <AppContainer
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          justifyContent: "start",
          alignItems: "center",
          placeItems: "start",
          gap: "10px",
          "@media (max-width: 760px)": {
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          },
        }}
      >
        {data?.data.map((address: any, index: number) => (
          <Card
            elevation={5}
            key={index}
            sx={{ p: 1, display: "grid", gap: "5px", border: "1px solid" }}
          >
            <AddressCard
              address={address.address}
              locality={address.locality}
              city={address.city}
              state={address.state}
              country={address.country}
              zipcode={address.zipcode}
            />
            <Box sx={{ display: "flex", gap: "10px", justifyContent: "start" }}>
              <EditAddress address={address} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  width: "50%",
                }}
              >
                {isLoading ? (
                  <CircularProgress />
                ) : address.is_active ? (
                  <PrirmaryButton
                    disabled
                    sx={{
                      display: "flex",
                      gap: "5px",
                      background: "green",
                    }}
                    label="In use"
                  />
                ) : (
                  <PrirmaryButton
                    variant="contained"
                    sx={{ display: "flex", gap: "5px" }}
                    label="Use this address"
                    onClick={() => onSubmit(address.id)}
                  />
                )}
              </Box>
            </Box>
          </Card>
        ))}
      </AppContainer>
    </AppContainer>
  );
}
