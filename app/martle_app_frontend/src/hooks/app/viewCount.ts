import { useLazyViewCountQuery } from "@/redux/services/appApiSlice";

export const useViewCount = () => {
  const [viewCount] = useLazyViewCountQuery();
  
  const onSubmit = async (data: any) => {
    await viewCount(data);
  };

  return { onSubmit };
};
