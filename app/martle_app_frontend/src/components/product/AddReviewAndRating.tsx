import React, { useReducer, useState } from "react";
import {
  FormControl,
  DialogActions,
  DialogContent,
  Typography,
  Rating,
  CircularProgress,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import InputField from "../common/Input";
import AppDialog from "../common/Dialog";
import PrirmaryButton from "../common/PrirmaryButton";
import ActionContainer from "../common/ActionContainer";
import SecondaryButton from "../common/SecondaryButton";
import ratingEmoji, { emojis } from "./utils/ratingEmoji";
import { useRatingAndReview } from "@/hooks/app/ratingAndReviews";
import DialogActionReducer, {
  initialState,
} from "../common/actions/DialogAction";

export default function AddReviewRating() {
  const { handleSubmit, handleRating, onSubmit, control, isLoading, rating } =
    useRatingAndReview();
  const [hover, setHover] = useState(-1);
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);

  const handleClickOpen = () => {
    dispatch({
      type: "OPEN_DIALOG",
      payload: { dialogType: "ratingAndReview" },
    });
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_DIALOG",
      payload: { dialogType: "ratingAndReview" },
    });
  };

  return (
    <React.Fragment>
      <SecondaryButton variant="outlined" onClick={handleClickOpen}>
        Rate Product
      </SecondaryButton>
      <AppDialog
        title="Review and Rating"
        open={state.ratingAndReview.open}
        onClose={handleClose}
      >
        <FormControl
          fullWidth
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              pt: "10px",
            }}
          >
            <InputField
              placeholder="Write a review..."
              type="text"
              name="review"
              rows="5"
              multiline={true}
              control={control}
            />
            <Rating
              onClick={() => handleRating(rating)}
              name="rating"
              value={rating}
              precision={0.5}
              getLabelText={ratingEmoji}
              onChange={(event, newRating: number) => {
                handleRating(newRating);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {rating !== null && (
              <Typography
                fontSize={25}
                sx={{
                  ml: 2,
                }}
              >
                {emojis[hover !== -1 ? hover : rating]}
              </Typography>
            )}
          </DialogContent>
          <DialogActions
            sx={{ width: "100%", display: "flex", justifyContent: "start" }}
          >
            <SecondaryButton variant="outlined" onClick={handleClose}>
              Cancel
            </SecondaryButton>
            <ActionContainer sx={{ display: "flex", justifyContent: "center" }}>
              {isLoading ? (
                <CircularProgress
                  size="small"
                  sx={{
                    width: "39px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                />
              ) : (
                <PrirmaryButton
                  type="submit"
                  label="Submit"
                  variant="contained"
                />
              )}
            </ActionContainer>
          </DialogActions>
        </FormControl>
      </AppDialog>
    </React.Fragment>
  );
}
