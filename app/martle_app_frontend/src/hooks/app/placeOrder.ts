import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { usePlaceOrderMutation } from "@/redux/services/appApiSlice";

export const usePlaceOrder = () => {
  const [placeOrder] = usePlaceOrderMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    await placeOrder(data)
      .then(() => {
        enqueueSnackbar("Placed Order Successfully", { variant: "success" });
        navigate("/payment/success");
      })
      .catch(() => {
        enqueueSnackbar("Failed to place order", { variant: "error" });
        navigate("/payment/failed");
      });
  };

  return { onSubmit };
};
