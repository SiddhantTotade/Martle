import { useReducer } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import AppDialog from "../Dialog";
import SearchForm from "./forms/SearchForm";
import DialogActionReducer, { initialState } from "../actions/DialogAction";

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
    <>
      <IconButton onClick={handleClickOpen}>
        <SearchIcon
          sx={{
            color: "#fff",
            "&:hover": { cursor: "pointer" },
          }}
        />
      </IconButton>
      <AppDialog
        titleStyle={{ p: 0 }}
        open={state.searchProduct.open}
        onClose={handleClose}
      >
        <SearchForm />
      </AppDialog>
    </>
  );
}
