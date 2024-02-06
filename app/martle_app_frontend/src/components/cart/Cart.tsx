import NoCart from "./NoCart";
import AppContainer from "../common/Container";
import CheckoutCart from "./CheckoutCart";
import { useGetCartQuery } from "@/redux/services/appApiSlice";
import CartItems from "./CartItems";

export default function Cart() {
  const { data, isLoading: getIsLoading } = useGetCartQuery(undefined);

  return (
    <>
      {data?.data.data.length === 0 ? (
        <NoCart />
      ) : (
        <AppContainer
          sx={{
            mt: "6rem",
            display: "flex",
            gap: "10px",
          }}
        >
          <CheckoutCart getIsLoading={getIsLoading} data={data} />
          <CartItems getIsLoading={getIsLoading} data={data} />
        </AppContainer>
      )}
    </>
  );
}
