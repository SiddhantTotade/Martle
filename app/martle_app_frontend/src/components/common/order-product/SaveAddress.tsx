import { useReducer } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";

import { initialState } from "../actions/DialogAction";
import DialogActionReducer from "../actions/DialogAction";
import AppDialog from "../Dialog";
import AddressForm from "./form/AddressForm";
import { setAddress } from "@/redux/features/addressSlice";
import PrirmaryButton from "../PrirmaryButton";
import { useSaveAddress } from "@/hooks/app/saveAddress";

export default function SaveAddress({ address }: any) {
  const storeAddress = useDispatch();
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);
  const { handleSubmit, onSubmit, control, isLoading } = useSaveAddress();

  const handleClickOpen = (address: any) => {
    storeAddress(setAddress(address));
    dispatch({
      type: "OPEN_DIALOG",
      payload: { dialogType: "addAddress" },
    });
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_DIALOG",
      payload: { dialogType: "addAddress" },
    });
  };

  return (
    <Box sx={{ width: "50%" }}>
      <PrirmaryButton
        label="Add address"
        sx={{ width: "30%", height: "5vh" }}
        variant="outlined"
        onClick={() => {
          handleClickOpen(address);
        }}
      />
      <AppDialog
        title="Edit Address"
        open={state.addAddress.open}
        onClose={handleClose}
      >
        <AddressForm
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
