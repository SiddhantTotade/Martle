import { useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import {
  FormControl,
  TextField,
  DialogContent,
  Divider,
  CircularProgress,
} from "@mui/material";

import SearchedProduct from "../SuggestedProducts";
import { useSuggestProduct } from "@/hooks/app/suggest";
import DialogActionReducer, { initialState } from "../../actions/DialogAction";

export default function SearchForm() {
  const [state, dispatch] = useReducer(DialogActionReducer, initialState);
  const { onSubmit, isLoading, data } = useSuggestProduct();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getValue = setTimeout(() => {
      onSubmit(value);
    }, 1000);

    return () => clearTimeout(getValue);
  }, [value]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (e.key === "Enter") {
      navigate(`/search/${value}`);
    }
  };

  return (
    <FormControl fullWidth component="form" onKeyUp={handleSubmit}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <TextField
          autoComplete="off"
          placeholder="What are you looking for ?"
          fullWidth
          onChange={(e) => setValue(e.target.value)}
        />
        {isLoading ? (
          <CircularProgress />
        ) : data?.product_tags_suggest__completion[0].options?.length !== 0 &&
          data !== undefined ? (
          <>
            <Divider
              flexItem
              sx={{ fontSize: "12px", color: "#2196f3" }}
              color="primary"
            >
              Mostly Viewed
            </Divider>
            <SearchedProduct currentData={data} />
          </>
        ) : value === "" ? (
          ""
        ) : (
          "Sorry 🥺, no products were found based on your query"
        )}
      </DialogContent>
    </FormControl>
  );
}
