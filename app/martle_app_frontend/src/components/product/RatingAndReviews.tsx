import { Box, CircularProgress, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import Reviews from "./Reviews";
import RatingBar from "../common/RatingBar";
import AppContainer from "../common/Container";
import AddReviewRating from "./AddReviewAndRating";
import { lightRatingColors } from "./ui/ratingColors";
import { useGetCalculateRatingQuery } from "@/redux/services/appApiSlice";

export default function RatingAndReviews({
  product_id,
}: {
  product_id: number;
}) {
  const { data, isLoading } = useGetCalculateRatingQuery(product_id);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <AppContainer sx={{ mt: 3 }}>
      <Typography fontWeight={"bold"} fontSize={20}>
        Ratings & Reviews
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2px",
          mt: 1,
        }}
      >
        <Box sx={{ width: "100%" }}>
          {data?.rating?.map((ratingObj: any, index: number) => {
            const rating = Number(Object.keys(ratingObj)[0]);

            return rating === 0 ? (
              ""
            ) : (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  alignItems: "center",
                }}
              >
                <RatingBar
                  width={"100%"}
                  value={data.rating[rating][rating]}
                  color={lightRatingColors[rating]}
                />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "1px",
                  }}
                >
                  <Typography
                    sx={{
                      color: lightRatingColors[rating],
                    }}
                    fontSize={15}
                  >
                    {rating}
                  </Typography>
                  <StarIcon
                    sx={{
                      color: lightRatingColors[rating],
                      fontSize: "12px",
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            width: "30%",
          }}
        >
          <AddReviewRating />
        </Box>
      </Box>
      <AppContainer>
        <Reviews product_id={product_id} />
      </AppContainer>
    </AppContainer>
  );
}
