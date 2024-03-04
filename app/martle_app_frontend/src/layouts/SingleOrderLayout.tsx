import Footer from "@/components/common/footer/Footer";
import Navbar from "@/components/common/navbar/Navbar";
import SingleOrder from "@/components/my-order/SingleOrder";

export default function SingleOrderLayout() {
  return (
    <>
      <Navbar />
      <SingleOrder />
      <Footer />
    </>
  );
}
