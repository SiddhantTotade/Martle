import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import AppContainer from "../common/Container";
import RatingBar from "../common/RatingBar";
import Reviews from "./Reviews";
import AddReviewRating from "./AddReviewAndRating";

const RatingAndReviews = (props) => {
  return (
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
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              alignItems: "center",
            }}
          >
            <RatingBar width={"100%"} value={90} color="#0277bd" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography sx={{ color: "#0277bd" }} fontSize={15}>
                5
              </Typography>
              <StarIcon sx={{ color: "#0277bd", fontSize: "12px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              alignItems: "center",
            }}
          >
            <RatingBar width={"100%"} value={90} color="#0288d1" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography sx={{ color: "#0288d1" }} fontSize={15}>
                4
              </Typography>
              <StarIcon sx={{ color: "#0288d1", fontSize: "12px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              alignItems: "center",
            }}
          >
            <RatingBar width={"100%"} value={90} color="#039be5" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography sx={{ color: "#039be5" }} fontSize={15}>
                3
              </Typography>
              <StarIcon sx={{ color: "#039be5", fontSize: "12px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              alignItems: "center",
            }}
          >
            <RatingBar width={"100%"} value={90} color="#03a9f4" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography sx={{ color: "#03a9f4" }} fontSize={15}>
                2
              </Typography>
              <StarIcon sx={{ color: "#03a9f4", fontSize: "12px" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              alignItems: "center",
            }}
          >
            <RatingBar width={"100%"} value={90} color="#29b6f6" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography sx={{ color: "#29b6f6" }} fontSize={15}>
                1
              </Typography>
              <StarIcon sx={{ color: "#29b6f6", fontSize: "12px" }} />
            </Box>
          </Box>
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
        <Reviews product_id={props.product_id ? props.product_id : ""} />
      </AppContainer>
    </AppContainer>
  );
};

export default RatingAndReviews;