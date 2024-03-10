import { useSaveRecommendedMutation } from "@/redux/services/appApiSlice";

export const useSaveRecommended = () => {
  const [recommended, { isLoading }] = useSaveRecommendedMutation(undefined);

  const onSubmit = async (data: any) => {
    await recommended(data);
  };
  return {
    onSubmit,
    isLoading,
  };
};
