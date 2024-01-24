import { useProductBySlugQuery } from "@/redux/services/appApiSlice";

export const useGetProductsBySlug = async (slug: any) => {
  const { data, isLoading } = useProductBySlugQuery(slug);

  return { isLoading, data };
};
