import { Typography, Divider } from "@mui/material";

import AppContainer from "@/components/common/Container";
import Footer from "@/components/common/footer/Footer";
import OrderProceedStepper from "@/components/checkout/Stepper";

export default function OrderProductLayout() {
  return (
    <>
      <Typography
        fontSize={30}
        sx={{ display: "flex", justifyContent: "center", mt: 4 }}
      >
        Checkout
      </Typography>
      <Divider color="#fff" flexItem sx={{ width: "30%", margin: "auto" }} />
      <AppContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          position: "relative",
          borderRadius: "5px",
          p: 2,
          mt: 4,
          "@media (max-width: 1000px)": {
            display: "flex",
            width: "100%",
          },
          "@media (max-width: 1410px)": {
            display: "flex",
            width: "95%",
          },
        }}
      >
        <OrderProceedStepper />
      </AppContainer>
      <Footer />
    </>
  );
}
