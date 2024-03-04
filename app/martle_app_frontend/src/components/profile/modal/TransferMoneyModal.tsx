import React, { useReducer } from "react";

import AppDialog from "@/components/common/Dialog";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import SecondaryButton from "@/components/common/SecondaryButton";
import DialogActionReducer, {
  initialState,
} from "@/components/common/actions/DialogAction";
import TransferMoneyForm from "../forms/TransferMoneyForm";

export default function TransferMoney() {
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);

  const handleClickOpen = () => {
    dispatch({
      type: "OPEN_DIALOG",
      payload: { dialogType: "transferMoney" },
    });
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_DIALOG",
      payload: { dialogType: "transferMoney" },
    });
  };

  return (
    <React.Fragment>
      <SecondaryButton variant="outlined" onClick={handleClickOpen}>
        Transfer to Pay
      </SecondaryButton>
      <AppDialog
        title="Transfer to Pay"
        open={state.transferMoney.open}
        onClose={handleClose}
      >
        <TransferMoneyForm handleClose={handleClose} />
      </AppDialog>
    </React.Fragment>
  );
}
