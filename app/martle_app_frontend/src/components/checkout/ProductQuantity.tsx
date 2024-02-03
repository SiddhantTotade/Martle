import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";

import { setQuantity } from "@/redux/features/quantitySlice";

export default function ProductQuantity() {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.quantity.quantity);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setQuantity({ quantity: event.target.value }));
  };

  return (
    <Box sx={{ width: "35%" }}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel size="small" id="demo-simple-select-label">
          Quantity
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantity}
          size="small"
          label="Quantity"
          onChange={handleChange}
        >
          {[...Array(5)].map((value, index) => (
            <MenuItem
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
              value={index + 1}
            >
              {index + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
