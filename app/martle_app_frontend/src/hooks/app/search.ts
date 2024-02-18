import { useSearchProductQuery } from "@/redux/services/appApiSlice";

export const useSearchProduct = () => {
  const [suggestProduct, { isLoading, data }] = useSearchProductQuery();

  const onSubmit = async (data: any) => {
    await suggestProduct(data);
  };

  return {
    onSubmit,
    isLoading,
    data,
  };
};
