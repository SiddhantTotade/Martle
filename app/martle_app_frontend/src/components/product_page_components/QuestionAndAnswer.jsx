import * as React from "react";
import { Box, Container, TextField, Typography } from "@mui/material";
import PostQuestionModal from "./PostQuestionModal";

const QuestionAndAnswer = () => {
  return (
    <Container>
      <Typography fontWeight={"bold"} fontSize={15}>
        Questions & Answers
      </Typography>
      <Container sx={{ display: "flex" }}>
        <Box sx={{ width: "80%", display: "flex" }}>
          <TextField
            sx={{ width: "100%" }}
            label="Any doubts regarding this product"
          />
        </Box>
        <Box
          sx={{
            width: "20%",
            justifyContent: "end",
            display: "flex",
          }}
        >
          <PostQuestionModal />
        </Box>
      </Container>
    </Container>
  );
};

export default QuestionAndAnswer;
