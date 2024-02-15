import React, { useReducer } from "react";
import SearchIcon from "@mui/icons-material/Search";

import AppDialog from "../Dialog";
import SecondaryButton from "../SecondaryButton";
import DialogActionReducer, { initialState } from "../actions/DialogAction";
import SearchForm from "./forms/SearchForm";

export default function Search() {
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);

  const handleClickOpen = () => {
    dispatch({
      type: "OPEN_DIALOG",
      payload: { dialogType: "searchProduct" },
    });
  };

  const handleClose = () => {
    dispatch({
      type: "CLOSE_DIALOG",
      payload: { dialogType: "searchProduct" },
    });
  };

  return (
    <React.Fragment>
      <SecondaryButton variant="outlined" onClick={handleClickOpen}>
        <SearchIcon sx={{ color: "#fff" }} />
      </SecondaryButton>
      <AppDialog open={state.searchProduct.open} onClose={handleClose}>
        <SearchForm />
      </AppDialog>
    </React.Fragment>
  );
}
