import { enqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";

import { setProductData } from "@/redux/features/productSlice";
import { useLazyAllProductsQuery } from "@/redux/services/appApiSlice";

export const useGetProducts = () => {
  const [allProduct, { isLoading }] = useLazyAllProductsQuery();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    await allProduct({ category: data.productCategory })
      .unwrap()
      .then((res) =>
        dispatch(setProductData({ category: data.type, data: res }))
      )
      .catch(() =>
        enqueueSnackbar("Unable to fetch products", { variant: "error" })
      );
  };
  return { onSubmit, isLoading };
};
