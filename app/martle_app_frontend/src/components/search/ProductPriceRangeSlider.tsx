import { setProductRange } from "@/redux/features/searchPriceRange";
import { Slider } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 20,
    label: "20K",
  },
  {
    value: 40,
    label: "40K",
  },
  {
    value: 60,
    label: "60K",
  },
  {
    value: 80,
    label: "80K",
  },
  {
    value: 100,
    label: "100K",
  },
];

export default function ProductPriceRangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 20]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductRange({ initial: value[0], final: value[1] }));
  }, [dispatch, value]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Slider
      size="small"
      getAriaLabel={() => "Price range"}
      value={value}
      onChange={handleChange}
      step={null}
      marks={marks}
    />
  );
}
