import { useReducer } from "react";
import {
  Box,
  FormControl,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";

import SecondaryButton from "../common/SecondaryButton";
import PrirmaryButton from "../common/PrirmaryButton";
import { useQuestionAndAnswer } from "@/hooks/app/askQuery";
import { initialState } from "../common/actions/DialogAction";
import DialogActionReducer from "../common/actions/DialogAction";
import AppDialog from "../common/Dialog";
import InputField from "../common/Input";
import ActionContainer from "../common/ActionContainer";

export default function AskQuestion(props) {
  const { handleSubmit, onSubmit, control, isLoading } = useQuestionAndAnswer();
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);

  const handleClickOpen = () => {
    dispatch({
      type: "OPEN_DIALOG",
      payload: { dialogType: "questionAndAnswer" },
    });
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_DIALOG",
      payload: { dialogType: "questionAndAnswer" },
    });
  };

  //   const [postQuestion, responsePostQuestion] =
  //     usePostQuestionAndAnswerAPIMutation();

  // const handleSubmit = () => {
  //   const postQuestionData = {
  //     user: user.id,
  //     product: props.product_id,
  //     date: new Date().toISOString().slice(0, 10),
  //     question: question,
  //     answer: null,
  //   };

  // postQuestion({
  //   access_token: access_token,
  //   postQuestionData: postQuestionData,
  // });

  // handleClose();
  // };

  return (
    <Box>
      <SecondaryButton variant="outlined" onClick={handleClickOpen}>
        Ask Query
      </SecondaryButton>
      <AppDialog
        title="Ask Query"
        open={state.questionAndAnswer.open}
        onClose={handleClose}
      >
        <FormControl
          fullWidth
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <InputField
              name="query"
              control={control}
              type="text"
              label="Type query here..."
            />
          </DialogContent>
          <DialogActions
            sx={{ width: "100%", display: "flex", justifyContent: "start" }}
          >
            <SecondaryButton variant="outlined" onClick={handleClose}>
              Cancel
            </SecondaryButton>
            <ActionContainer sx={{ display: "flex", justifyContent: "center" }}>
              {isLoading ? (
                <CircularProgress
                  size="small"
                  sx={{
                    width: "39px",
                    justifyContent: "center",
                    display: "flex",
                  }}
                />
              ) : (
                <PrirmaryButton
                  type="submit"
                  label="Submit"
                  variant="contained"
                />
              )}
            </ActionContainer>
          </DialogActions>
        </FormControl>
      </AppDialog>
    </Box>
  );
}
