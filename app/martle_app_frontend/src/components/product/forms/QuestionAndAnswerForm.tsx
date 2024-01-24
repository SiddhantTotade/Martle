import {
  FormControl,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";

import InputField from "@/components/common/Input";
import SecondaryButton from "@/components/common/SecondaryButton";
import PrirmaryButton from "@/components/common/PrirmaryButton";
import ActionContainer from "@/components/common/ActionContainer";

interface Props {
  handleSubmit: () => void;
  onSubmit: () => void;
  handleClose: () => void;
  control: any;
  isLoading: boolean;
}

export default function QuestionAndAnswerForm({
  handleSubmit,
  onSubmit,
  control,
  handleClose,
  isLoading,
}: Props) {
  return (
    <FormControl fullWidth component="form" onSubmit={handleSubmit(onSubmit)}>
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
          label="Ask Question"
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
            <PrirmaryButton type="submit" label="Submit" variant="contained" />
          )}
        </ActionContainer>
      </DialogActions>
    </FormControl>
  );
}
