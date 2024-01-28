import { Box, Typography } from "@mui/material";

import AppContainer from "../common/Container";
import AskQuestion from "./AskQuery";
import QuestionAnswerAutoComplete from "./QuestionAnswerAutoComplete";

export default function QuestionAndAnswer(props) {
  return (
    <AppContainer sx={{ mt: 0 }}>
      <Typography fontWeight={"bold"} fontSize={20}>
        Questions & Answers
      </Typography>
      <AppContainer
        sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: 1 }}
      >
        <Box
          sx={{ width: "80%", display: "flex", maxWidth: "90%", flexGrow: 1 }}
        >
          <QuestionAnswerAutoComplete product_id={props.product_id} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <AskQuestion product_id={props.product_id} />
        </Box>
      </AppContainer>
    </AppContainer>
  );
}
