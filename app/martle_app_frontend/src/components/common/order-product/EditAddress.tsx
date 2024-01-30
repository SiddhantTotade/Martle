import { useReducer } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";

import SecondaryButton from "../SecondaryButton";
import { initialState } from "../actions/DialogAction";
import DialogActionReducer from "../actions/DialogAction";
import AppDialog from "../Dialog";
import AddressForm from "./form/AddressForm";
import { setAddress } from "@/redux/features/addressSlice";
import { RootState } from "@reduxjs/toolkit/query";
import { useUpdateAddress } from "@/hooks/app/updateAddress";

export default function EditAddress({ address }: any) {
  const storeAddress = useDispatch();
  const userAddress = useSelector((state: RootState) => state.address);
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);
  const { handleSubmit, onSubmit, control, isLoading } = useUpdateAddress();

  const handleClickOpen = (address: any) => {
    storeAddress(setAddress(address));
    dispatch({
      type: "OPEN_DIALOG",
      payload: { dialogType: "editAddress" },
    });
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_DIALOG",
      payload: { dialogType: "editAddress" },
    });
  };

  return (
    <Box sx={{ width: "50%" }}>
      <SecondaryButton
        variant="outlined"
        onClick={() => {
          handleClickOpen(address);
        }}
      >
        Edit <EditIcon fontSize="small" />
      </SecondaryButton>
      <AppDialog
        title="Edit Address"
        open={state.editAddress.open}
        onClose={handleClose}
      >
        <AddressForm
          userAddress={userAddress}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          isLoading={isLoading}
        />
      </AppDialog>
    </Box>
  );
}
