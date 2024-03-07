import { useReducer } from "react";
import {
  FormControl,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";

import AppDialog from "../common/Dialog";
import InputField from "../common/Input";
import PrirmaryButton from "../common/PrirmaryButton";
import SecondaryButton from "../common/SecondaryButton";
import ActionContainer from "../common/ActionContainer";
import { useQuestionAndAnswer } from "@/hooks/app/askQuery";
import { initialState } from "../common/actions/DialogAction";
import DialogActionReducer from "../common/actions/DialogAction";

export default function AskQuestion() {
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

  return (
    <>
      <SecondaryButton
        sx={{ height: "8vh" }}
        variant="outlined"
        onClick={handleClickOpen}
      >
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
    </>
  );
}
