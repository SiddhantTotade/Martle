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
import { useGetLoggedInUserQuery } from "../../services/userAuthAPI";
import { usePostQuestionAndAnswerAPIMutation } from "../../services/questionAndAnswer";

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

  const [postQuestion, responsePostQuestion] =
    usePostQuestionAndAnswerAPIMutation();

  const [question, setQuestion] = useState(null);

  const [open, setOpen] = React.useState(false);

  // console.log(question);

  const handleSubmit = () => {
    const postQuestionData = {
      user: user.id,
      product: props.product_id,
      date: new Date().toISOString().slice(0, 10),
      question: question,
      answer: null,
    };

    postQuestion({
      access_token: access_token,
      postQuestionData: postQuestionData,
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
            onChange={(e) => setQuestion(e.target.value)}
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
