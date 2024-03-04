import { InferType } from "yup";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

import { AmountSchema } from "@/schemas/app";
import { useTransferMoneyMutation } from "@/redux/services/appApiSlice";

interface TransferMoneyForm {
  amount: string;
}

type AmountSchemaType = InferType<typeof AmountSchema>;

export const useTransferMoney = () => {
  const { handleSubmit, control, reset } = useForm<AmountSchemaType>({
    resolver: yupResolver(AmountSchema),
  });
  const [transferMoney, { isLoading }] = useTransferMoneyMutation();

  const onSubmit = async (data: TransferMoneyForm) => {
    const res = await transferMoney(data).finally(() => reset());

    if ("error" in res) {
      enqueueSnackbar("Failed to transfer", { variant: "success" });
    } else {
      enqueueSnackbar("Money transferred successfully", { variant: "error" });
    }
  };

  return { handleSubmit, control, onSubmit, isLoading };
};
