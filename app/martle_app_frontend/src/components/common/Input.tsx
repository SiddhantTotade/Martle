import { useState, InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { red } from "@mui/material/colors";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
  rows?: string;
  multiline?: boolean;
  error?: boolean;
  outsideValue?: number;
  control: any;
}

export default function InputField({
  name,
  control,
  label,
  placeholder,
  rows,
  multiline,
  outsideValue,
  type,
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
          value={outsideValue !== null ? outsideValue : value}
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
