import React, { useReducer } from "react";

import AppDialog from "@/components/common/Dialog";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import SecondaryButton from "@/components/common/SecondaryButton";
import DialogActionReducer, {
  initialState,
} from "@/components/common/actions/DialogAction";

export default function ChangePassword() {
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);

  const handleClickOpen = () => {
    dispatch({
      type: "OPEN_DIALOG",
      payload: { dialogType: "changePassword" },
    });
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_DIALOG",
      payload: { dialogType: "changePassword" },
    });
  };

  return (
    <React.Fragment>
      <SecondaryButton variant="outlined" onClick={handleClickOpen}>
        Change Password
      </SecondaryButton>
      <AppDialog
        title="Review and Rating"
        open={state.changePassword.open}
        onClose={handleClose}
      >
        <ChangePasswordForm handleClose={handleClose} />
      </AppDialog>
    </React.Fragment>
  );
}
