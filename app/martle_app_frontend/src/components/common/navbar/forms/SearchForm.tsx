import { useEffect, useState } from "react";

import {
  FormControl,
  TextField,
  DialogContent,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useSearchProduct } from "@/hooks/app/search";
import SearchedProduct from "../SearchedProduct";

export default function SearchForm() {
  const { onSubmit, isLoading, currentData } = useSearchProduct();
  const [value, setValue] = useState();

  console.log(currentData);

  useEffect(() => {
    const getValue = setTimeout(() => {
      onSubmit(value);
    }, 1000);

    return () => clearTimeout(getValue);
  }, [value]);

  return (
    <FormControl fullWidth component="form">
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
          pt: "10px",
        }}
      >
        <TextField
          placeholder="What are you looking for ?"
          fullWidth
          onChange={(e) => setValue(e.target.value)}
        />
        {isLoading ? (
          <CircularProgress />
        ) : currentData?.length !== 0 ? (
          <>
            <Divider
              flexItem
              sx={{ fontSize: "12px", color: "#2196f3" }}
              color="primary"
            >
              Mostly Viewed
            </Divider>
            <SearchedProduct currentData={currentData} />
          </>
        ) : (
          ""
        )}
      </DialogContent>
    </FormControl>
  );
}
