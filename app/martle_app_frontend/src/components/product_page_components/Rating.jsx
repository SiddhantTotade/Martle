import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { Typography } from "@mui/material";

const labels = {
  0.5: "🤮",
  1: "🤢",
  1.5: "😔",
  2: "😑",
  2.5: "😌",
  3: "🙂",
  3.5: "😊",
  4: "🥰",
  4.5: "😘",
  5: "🤩",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

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
        getLabelText={getLabelText}
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
          {labels[hover !== -1 ? hover : value]}
        </Typography>
      )}
    </Box>
  );
};

export default ProductRating;
