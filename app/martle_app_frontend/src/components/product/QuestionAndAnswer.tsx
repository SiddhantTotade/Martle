import { Box, Typography } from "@mui/material";

import AppContainer from "../common/Container";
import AskQuestion from "./AskQuery";
import QuestionAnswerAutoComplete from "./QuestionAnswerAutoComplete";

export default function QuestionAndAnswer(props) {
  return (
    <AppContainer sx={{ mt: 2 }}>
      <Typography fontWeight={"bold"} fontSize={20}>
        Questions & Answers
      </Typography>
      <AppContainer
        sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: 0 }}
      >
        <Box sx={{ display: "flex", maxWidth: "100%", flexGrow: 1 }}>
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
