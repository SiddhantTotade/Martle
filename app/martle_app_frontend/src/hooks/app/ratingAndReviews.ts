import { InferType } from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootState } from "@reduxjs/toolkit/query";

import { useSaveRatingAndReviewMutation } from "@/redux/services/appApiSlice";
import { RatingAndReviewSchema } from "@/schemas/app";

interface RatingAndReviewForm {
  review: string;
}

type RatingAndReviewSchemaType = InferType<typeof RatingAndReviewSchema>;

export const useRatingAndReview = () => {
  const [rating, setRating] = useState(1.5);
  const { handleSubmit, control, reset } = useForm<RatingAndReviewSchemaType>({
    resolver: yupResolver(RatingAndReviewSchema),
  });
  const user = useSelector((state: RootState) => state.user);
  const [ratingAndReview, { isLoading }] = useSaveRatingAndReviewMutation();

  const handleRating = (data: number) => {
    setRating(data);
  };

  const onSubmit = async (data: RatingAndReviewForm) => {
    console.log(data);

    const newData = {
      ...data,
      user: user.id,
      date: new Date().toISOString().split("T")[0],
      product: 1,
      rating: rating,
    };

    await ratingAndReview(newData)
      .unwrap()
      .then(() =>
        enqueueSnackbar("Rating and Review Submited", { variant: "success" })
      )
      .catch(() => enqueueSnackbar("Some error occured", { variant: "error" }))
      .finally(() => reset());
  };

  return {
    handleSubmit,
    handleRating,
    control,
    onSubmit,
    isLoading,
    rating,
  };
};
