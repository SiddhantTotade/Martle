import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import PurchasedOrders from "@/components/my-order/PurchasedOrders";

export default function MyOrdersLayout() {
  return (
    <>
      <Navbar />
      <PurchasedOrders />
      <Footer />
    </>
  );
}
