import {
  CircularProgress,
  DialogActions,
  DialogContent,
  FormControl,
} from "@mui/material";

import InputField from "@/components/common/Input";
import ActionContainer from "@/components/common/ActionContainer";
import SecondaryButton from "@/components/common/SecondaryButton";
import PrirmaryButton from "@/components/common/PrirmaryButton";
import { useTransferMoney } from "@/hooks/app/transferMoney";

interface Props {
  handleClose: () => void;
}

export default function TransferMoneyForm({ handleClose }: Props) {
  const { handleSubmit, onSubmit, control, isLoading } = useTransferMoney();

  return (
    <FormControl fullWidth component="form" onSubmit={handleSubmit(onSubmit)}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          pt: "10px",
        }}
      >
        <InputField
          type="text"
          name="amount"
          label="Amount"
          control={control}
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
