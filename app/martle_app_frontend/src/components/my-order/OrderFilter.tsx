import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

export default function OrderFilter() {
  const [orders, setOrders] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setOrders(event.target.value as string);
  };

  return (
    <FormControl
      sx={{
        display: "grid",
        gap: "10px",
        position: "fixed",
        overflow: "hidden",
        p: 1,
        "@media(max-width:1080px)": {
          display: "grid",
          width: "95%",
          overflow: "hidden",
          mt: 1,
        },
      }}
    >
      <InputLabel sx={{ p: 1 }} size="small" id="demo-simple-select-label">
        Orders
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={orders}
        size="small"
        label="Orders"
        onChange={handleChange}
      >
        <MenuItem value={10}>This week</MenuItem>
        <MenuItem value={20}>This month</MenuItem>
        <MenuItem value={30}>6 months</MenuItem>
        <MenuItem value={30}>1 year</MenuItem>
      </Select>
      <TextField fullWidth size="small" label="Search" />
    </FormControl>
  );
}
