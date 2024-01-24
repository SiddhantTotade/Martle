import { InferType } from "yup";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSaveQuestionAndAnswerMutation } from "@/redux/services/appApiSlice";
import { AskQuerySchema } from "@/schemas/app";

interface AskQueryForm {
  query: string;
}

type QuestionAndAnswerSchemaType = InferType<typeof AskQuerySchema>;

export const useQuestionAndAnswer = () => {
  const { handleSubmit, control, reset } = useForm<QuestionAndAnswerSchemaType>(
    {
      resolver: yupResolver(AskQuerySchema),
    }
  );
  const [askQuery, { isLoading }] = useSaveQuestionAndAnswerMutation();

  const onSubmit = async (data: AskQueryForm) => {
    const newData = { ...data, user: 2, product: 2 };

    await askQuery(newData)
      .unwrap()
      .then(() => enqueueSnackbar("Query Submited", { variant: "success" }))
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
