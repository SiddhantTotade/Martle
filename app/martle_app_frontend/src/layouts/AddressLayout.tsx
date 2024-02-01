import AppContainer from "@/components/common/Container";
import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import Address from "@/components/common/order-product/Address";

export default function AddressLayout() {
  return (
    <>
      <Navbar />
      <AppContainer sx={{ mt: "6rem" }}>
        <Address />
      </AppContainer>
      <Footer />
    </>
  );
}
