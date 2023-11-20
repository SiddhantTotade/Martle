import { InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type: string;
  error?: boolean;
  control: any;
}

export default function InputField({ name, control, label, type }: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <TextField
          fullWidth
          variant="outlined"
          label={label}
          type={type}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
}
