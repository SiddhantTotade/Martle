import {
  FormControl,
  DialogContent,
  Rating,
  Typography,
  CircularProgress,
  DialogActions,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import InputField from "@/components/common/Input";
import ActionContainer from "@/components/common/ActionContainer";
import SecondaryButton from "@/components/common/SecondaryButton";
import PrirmaryButton from "@/components/common/PrirmaryButton";
import ratingEmoji, { emojis } from "../utils/ratingEmoji";

interface RatingFormProps {
  control: any;
  handleSubmit: any;
  handleRating: (newRating: number) => void;
  rating: number;
  isLoading: boolean;
  setHover: React.Dispatch<React.SetStateAction<number>>;
}

export default function RatingAndReviewForm({
  control,
  handleSubmit,
  handleRating,
  rating,
  isLoading,
  setHover,
}: RatingFormProps) {
  return (
    <FormControl
      fullWidth
      component="form"
      onSubmit={handleSubmit(handleRating)}
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
          onClick={(event, newRating) => handleRating(newRating)}
          name="rating"
          value={rating}
          precision={0.5}
          getLabelText={ratingEmoji}
          onChangeActive={(event, newHover) => setHover(newHover)}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {rating !== null && (
          <Typography
            fontSize={25}
            sx={{
              ml: 2,
            }}
          >
            {emojis[setHover !== -1 ? setHover : rating]}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <ActionContainer
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <SecondaryButton variant="outlined" onClick={handleRating}>
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
        </ActionContainer>
      </DialogActions>
    </FormControl>
  );
}
