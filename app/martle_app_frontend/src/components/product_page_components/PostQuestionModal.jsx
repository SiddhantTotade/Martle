import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, TextField } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { getToken } from "../../services/LocalStorageService";
import { usePostReviewsAPIMutation } from "../../services/ratingAndReview";
import { useGetLoggedInUserQuery } from "../../services/userAuthAPI";

const buttonStyle = {
  textTransform: "none",
  height: "100%",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PostQuestionModal = (props) => {
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
        Post Question
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Post Question"}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <TextField
            sx={{ width: "500px", marginTop: "6px" }}
            variant="outlined"
            label="Ask a question"
          />
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

export default PostQuestionModal;
