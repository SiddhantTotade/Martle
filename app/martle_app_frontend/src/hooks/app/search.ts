import { useLazySearchProductQuery } from "@/redux/services/appApiSlice";

export const useSearchProduct = () => {
  const [searchProduct, { isLoading, currentData }] =
    useLazySearchProductQuery();
  const onSubmit = async (data: any) => {
    await searchProduct(data).unwrap().then().catch();
  };

  return { onSubmit, isLoading, searchProduct, currentData };
};
