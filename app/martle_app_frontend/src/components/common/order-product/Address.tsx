import { Card, Box, CircularProgress } from "@mui/material";

import { useGetAddressQuery } from "@/redux/services/appApiSlice";
import PrirmaryButton from "../PrirmaryButton";
import AppContainer from "../Container";
import EditAddress from "./EditAddress";
import SaveAddress from "./SaveAddress";
import AddressCard from "./AddressCard";

export default function Address() {
  const { data } = useGetAddressQuery(undefined);

  return (
    <AppContainer sx={{ mt: 2 }}>
      {data?.data.length <= 2 && <SaveAddress />}
      <AppContainer
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
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
                sx={{ display: "flex", justifyContent: "center", width: "50%" }}
              >
                {/* <CircularProgress /> */}
                <PrirmaryButton
                  variant="contained"
                  sx={{ display: "flex", gap: "5px" }}
                  label="Use this address"
                />
              </Box>
            </Box>
          </Card>
        ))}
      </AppContainer>
    </AppContainer>
  );
}
