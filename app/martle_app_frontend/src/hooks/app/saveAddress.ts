import { InferType } from "yup";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSaveAddressMutation } from "@/redux/services/appApiSlice";
import { AddressSchema } from "@/schemas/app";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

interface SaveAddressForm {
  address: string;
  locality: string;
  city: string;
  state: string;
  country: string;
  zipcode: number;
}

type AddressSchemaType = InferType<typeof AddressSchema>;

export const useSaveAddress = () => {
  const { handleSubmit, control, reset } = useForm<AddressSchemaType>({
    resolver: yupResolver(AddressSchema),
  });
  const user = useSelector((state: RootState) => state.user);
  const [addAddress, { isLoading }] = useSaveAddressMutation();

  const onSubmit = async (data: SaveAddressForm) => {
    const newData = { ...data, user: user.id };

    await addAddress(newData)
      .unwrap()
      .then(() =>
        enqueueSnackbar("Address saved successfully", { variant: "success" })
      )
      .catch(() => enqueueSnackbar("Some error occured", { variant: "error" }))
      .finally(() => reset());
  };

  return {
    handleSubmit,
    control,
    onSubmit,
    isLoading,
  };
};
