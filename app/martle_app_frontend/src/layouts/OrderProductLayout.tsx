import AppContainer from "@/components/common/Container";
import OrderProceedStepper from "@/components/order-product/Stepper";

export default function OrderProductLayout() {
  return (
    <AppContainer
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "75%",
        position: "relative",
        mt: "6rem",
        "@media (max-width: 1000px)": {
          display: "grid",
          width: "100%",
        },
      }}
    >
      <OrderProceedStepper />
    </AppContainer>
  );
}
