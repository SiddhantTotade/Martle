import React, { useReducer } from "react";
import SearchIcon from "@mui/icons-material/Search";

import AppDialog from "../Dialog";
import DialogActionReducer, { initialState } from "../actions/DialogAction";
import SearchForm from "./forms/SearchForm";
import { IconButton } from "@mui/material";

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
    <IconButton onClick={handleClickOpen}>
      <SearchIcon
        sx={{
          color: "#fff",
          "&:hover": { cursor: "pointer" },
        }}
      />
      <AppDialog
        titleStyle={{ p: 0 }}
        open={state.searchProduct.open}
        onClose={handleClose}
      >
        <SearchForm />
      </AppDialog>
    </IconButton>
  );
}
