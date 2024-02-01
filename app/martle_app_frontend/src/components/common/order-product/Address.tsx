import {
  Card,
  Box,
  CircularProgress,
  Typography,
  Divider,
} from "@mui/material";

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
    <>
      <Typography
        fontSize={30}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Address
      </Typography>
      <Divider flexItem sx={{ width: "30%", margin: "auto" }} />
      <AppContainer sx={{ mt: 2 }}>
        {data?.data.length <= 2 && <SaveAddress />}
        <AppContainer
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            justifyContent: "center",
            alignItems: "center",
            placeItems: "center",
            gap: "10px",
          }}
        >
          {data?.data.map((address, index) => (
            <Card
              elevation={5}
              key={index}
              sx={{ p: 1, display: "grid", gap: "5px", border: "2px solid" }}
            >
              <AddressCard
                address={address.address}
                locality={address.locality}
                city={address.city}
                state={address.state}
                country={address.country}
                zipcode={address.zipcode}
              />
              <Box
                sx={{ display: "flex", gap: "10px", justifyContent: "center" }}
              >
                <EditAddress address={address} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
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
    </>
  );
}
