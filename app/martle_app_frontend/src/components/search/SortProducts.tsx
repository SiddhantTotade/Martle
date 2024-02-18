import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export default function SortProduct() {
  const [sortType, setSortType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel size="small" id="demo-simple-select-label">
        Sort by
      </InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortType}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value={10}>High to Low</MenuItem>
        <MenuItem value={20}>Low to High</MenuItem>
      </Select>
    </FormControl>
  );
}
