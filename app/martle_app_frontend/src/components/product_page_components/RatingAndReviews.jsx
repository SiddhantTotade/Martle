import React from "react";
import { Box, Container, Typography } from "@mui/material";
import RatingBar from "../base_components/RatingBar";
import StarIcon from "@mui/icons-material/Star";
import Reviews from "./Reviews";
import AddReviewRatingModal from "./AddReviewRatingModal";

const RatingAndReviews = (props) => {
  return (
    <Container>
      <Typography fontWeight={"bold"} fontSize={15}>
        Ratings & Reviews
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2px",
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
            <RatingBar width={"100%"} value={90} color="#57e32c" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography fontSize={15}>5</Typography>
              <StarIcon sx={{ fontSize: "12px" }} />
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
            <RatingBar width={"100%"} value={90} color="#b7dd29" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography fontSize={15}>4</Typography>
              <StarIcon sx={{ fontSize: "12px" }} />
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
            <RatingBar width={"100%"} value={90} color="#ffe234" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography fontSize={15}>3</Typography>
              <StarIcon sx={{ fontSize: "12px" }} />
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
            <RatingBar width={"100%"} value={90} color="#ffa534" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography fontSize={15}>2</Typography>
              <StarIcon sx={{ fontSize: "12px" }} />
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
            <RatingBar width={"100%"} value={90} color="#ff4545" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "1px",
              }}
            >
              <Typography fontSize={15}>1</Typography>
              <StarIcon sx={{ fontSize: "12px" }} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "30%",
          }}
        >
          <Container sx={{ display: "flex", justifyContent: "end" }}>
            <AddReviewRatingModal
              product_id={props.product_id ? props.product_id : ""}
            />
          </Container>
        </Box>
      </Box>
      <Container>
        <Reviews product_id={props.product_id ? props.product_id : ""} />
      </Container>
    </Container>
  );
};

export default RatingAndReviews;
