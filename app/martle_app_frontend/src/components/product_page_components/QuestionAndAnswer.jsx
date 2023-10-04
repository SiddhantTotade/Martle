import * as React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import PostQuestionModal from "./PostQuestionModal";
import QuestionAnswerAutoComplete from "./QuestionAnswerAutoComplete";

const QuestionAndAnswer = (props) => {
  return (
    <Container>
      <Typography fontWeight={"bold"} fontSize={15}>
        Questions & Answers
      </Typography>
      <Container sx={{ display: "flex" }}>
        <Box sx={{ width: "80%", display: "flex" }}>
          <QuestionAnswerAutoComplete />
        </Box>
        <Box
          sx={{
            width: "20%",
            justifyContent: "end",
            display: "flex",
          }}
        >
          <PostQuestionModal product_id={props.product_id} />
        </Box>
      </Container>
    </Container>
  );
};

export default QuestionAndAnswer;
