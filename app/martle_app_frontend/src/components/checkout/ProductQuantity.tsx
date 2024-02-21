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

interface Props {
  product_id?: string;
}

const quantityArr = [1, 2, 3, 4, 5];

export default function ProductQuantity({ product_id }: Props) {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state: RootState) => state.quantity[`${product_id}`]?.quantity || 1
  );

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(
      setQuantity({
        product_id: product_id,
        quantity: Number(event.target.value),
      })
    );
  };

  return (
    <Box sx={{ width: "35%" }}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel size="small" id={`quantity-label-${product_id}`}>
          Quantity
        </InputLabel>
        <Select
          labelId={`quantity-label-${product_id}`}
          id={`quantity-label-${product_id}`}
          value={quantity}
          size="small"
          label="Quantity"
          onChange={handleChange}
        >
          {quantityArr.map((value, index) => (
            <MenuItem
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
              value={value}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
