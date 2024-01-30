import * as React from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function ProductQuantity() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ width: "10%" }}>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel size="small" id="demo-simple-select-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          size="small"
          label="quantity"
          onChange={handleChange}
        >
          {[...Array(5)].map((value, index) => (
            <MenuItem key={index} value={value}>
              {index}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
