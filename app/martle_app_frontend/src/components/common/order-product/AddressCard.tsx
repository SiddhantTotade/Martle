import { Box, Card, CircularProgress, Typography } from "@mui/material";

import { useGetAddressQuery } from "@/redux/services/appApiSlice";
import AppContainer from "../Container";
import PrirmaryButton from "../PrirmaryButton";
import SaveAndEditAddress from "./EditAddress";
import SaveAddress from "./SaveAddress";

export default function AddressCard() {
  const { data } = useGetAddressQuery(undefined);

  return (
    <>
      {data?.data.length <= 2 && <SaveAddress />}
      <AppContainer
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
          gap: "10px",
          mt: 2,
          ml: 0,
        }}
      >
        {data?.data.map?.((address: any, index: number) => (
          <Card
            elevation={5}
            key={index}
            sx={{ p: 1, display: "grid", gap: "5px", border: "2px solid" }}
          >
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography fontWeight="bold" fontSize="small">
                Address -{" "}
              </Typography>
              <Typography fontSize="small">{address.address}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography fontWeight="bold" fontSize="small">
                Locality -{" "}
              </Typography>
              <Typography fontSize="small">{address.locality}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography fontWeight="bold" fontSize="small">
                City -{" "}
              </Typography>
              <Typography fontSize="small">{address.city}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography fontWeight="bold" fontSize="small">
                State -{" "}
              </Typography>
              <Typography fontSize="small">{address.state}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography fontWeight="bold" fontSize="small">
                Country -{" "}
              </Typography>
              <Typography fontSize="small">{address.country}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Typography fontWeight="bold" fontSize="small">
                Zipcode -{" "}
              </Typography>
              <Typography fontSize="small">{address.zipcode}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", gap: "10px", justifyContent: "center" }}
            >
              <SaveAndEditAddress address={address} />
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
    </>
  );
}
