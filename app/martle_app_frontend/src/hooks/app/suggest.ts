import { useLazySuggestProductQuery } from "@/redux/services/appApiSlice";

export const useSuggestProduct = () => {
  const [suggestProduct, { isLoading, data }] = useLazySuggestProductQuery();

  const onSubmit = async (data: any) => {
    await suggestProduct(`product_tags_suggest__completion=${data}`);
  };

  return {
    onSubmit,
    isLoading,
    data,
  };
};
