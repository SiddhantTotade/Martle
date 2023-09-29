import * as React from "react";

import StarIcon from "@mui/icons-material/Star";
import { Typography, Box, Rating } from "@mui/material";

import ratingEmoji from "../../shared/Rating and Review/RatingEmoji";
import { emojis } from "../../shared/Rating and Review/RatingEmoji";

const ProductRating = (props) => {
  const [value, setValue] = React.useState(0.5);

  const [hover, setHover] = React.useState(-1);

  const handleRating = () => {
    props.handleRating(value);
  };

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        onClick={handleRating(value)}
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={ratingEmoji}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Typography
          fontSize={25}
          sx={{
            ml: 2,
          }}
        >
          {emojis[hover !== -1 ? hover : value]}
        </Typography>
      )}
    </Box>
  );
};

export default ProductRating;
