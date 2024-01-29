import { InferType } from "yup";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUpdateAddressMutation } from "@/redux/services/appApiSlice";
import { AddressSchema } from "@/schemas/app";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";

interface UpdateAddressForm {
  id: number;
  address: string;
  locality: string;
  city: string;
  state: string;
  country: string;
  zipcode: number;
}

type AddressSchemaType = InferType<typeof AddressSchema>;

export const useUpdateAddress = () => {
  const { handleSubmit, control, reset } = useForm<AddressSchemaType>({
    resolver: yupResolver(AddressSchema),
  });
  const address = useSelector((state: RootState) => state.address);
  const user = useSelector((state: RootState) => state.user);
  const [updateAddress, { isLoading }] = useUpdateAddressMutation();

  const onSubmit = async (data: UpdateAddressForm) => {
    const newData = { ...data, id: address.id, user: user.id };

    await updateAddress(newData)
      .unwrap()
      .then(() =>
        enqueueSnackbar("Address updated successfully", { variant: "success" })
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
