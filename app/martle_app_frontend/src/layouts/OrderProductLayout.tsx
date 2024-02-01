import AppContainer from "@/components/common/Container";
import Footer from "@/components/common/footer/Footer";
import OrderProceedStepper from "@/components/order-product/Stepper";

export default function OrderProductLayout() {
  return (
    <>
      <AppContainer
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "85%",
          position: "relative",
          border: "2px solid",
          borderRadius: "5px",
          p: 2,
          mt: "6rem",
          "@media (max-width: 1000px)": {
            display: "grid",
            width: "100%",
          },
        }}
      >
        <OrderProceedStepper />
      </AppContainer>
      <Footer />
    </>
  );
}
