import { useState, InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  IconButton,
  InputAdornment,
  Typography,
  SxProps,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { red } from "@mui/material/colors";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  size?: "small" | "middle";
  rows?: string;
  multiline?: boolean;
  error?: boolean;
  outsideValue?: number;
  defaultOutsideValue?: string;
  control: any;
  sx?: SxProps;
  disabled?: boolean;
}

export default function InputField({
  name,
  control,
  label,
  placeholder,
  rows,
  multiline,
  outsideValue,
  defaultOutsideValue,
  type,
  size,
  sx,
  disabled,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => (
        <TextField
          InputProps={
            type === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                        color="primary"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : undefined
          }
          fullWidth
          variant="outlined"
          label={label || ""}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          type={showPassword ? "text" : type}
          size={size}
          sx={sx}
          disabled={disabled}
          value={outsideValue !== null ? outsideValue : value}
          defaultValue={defaultOutsideValue}
          onChange={onChange}
          error={!!error}
          helperText={
            error ? (
              <Typography
                variant="caption"
                component="span"
                sx={{
                  color:
                    localStorage.getItem("themeMode") === "light"
                      ? red[900]
                      : "#fff",
                }}
              >
                {error.message}
              </Typography>
            ) : null
          }
        />
      )}
    />
  );
}
