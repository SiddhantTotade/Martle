import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material";
import ProductRating from "./Rating";
import { getToken } from "../../services/LocalStorageService";
import { usePostReviewsAPIMutation } from "../../services/ratingAndReview";
import { useGetLoggedInUserQuery } from "../../services/userAuthAPI";

const buttonStyle = {
  textTransform: "none",
};

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 520px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 2px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddReviewRatingModal = (props) => {
  const { access_token } = getToken();

  const user = useGetLoggedInUserQuery(access_token).data;

  const [postReview, responsePostReview] = usePostReviewsAPIMutation();

  const [review, setReview] = useState({
    user: null,
    product: null,
    date: "",
    content: "",
    rating: "",
  });

  const [open, setOpen] = React.useState(false);

  const handleRating = (data) => {
    review.rating = data;
  };

  const handleData = (event) => {
    const newData = { ...review };
    newData[event.target.id] = event.target.value;
    setReview(newData);
  };

  const handleSubmit = () => {
    const reviewData = {
      user: user.id,
      product: props.product_id,
      date: new Date().toISOString().slice(0, 10),
      content: review.content,
      rating: review.rating,
    };

    postReview({
      access_token: access_token,
      reviewData: reviewData,
    });

    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button sx={buttonStyle} variant="outlined" onClick={handleClickOpen}>
        Rate Product
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Rating and Review"}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <StyledTextarea
            id="content"
            onChange={(e) => {
              handleData(e);
            }}
            aria-label="minimum height"
            minRows={2}
            placeholder="Write a review"
          />
          <ProductRating handleRating={handleRating} />
        </DialogContent>
        <DialogActions>
          <Button sx={buttonStyle} variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={buttonStyle} variant="outlined" onClick={handleSubmit}>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddReviewRatingModal;
