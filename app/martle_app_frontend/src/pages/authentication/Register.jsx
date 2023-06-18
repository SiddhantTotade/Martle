import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Checkbox,
  checkboxClasses,
  Button,
  Grid,
  FormControlLabel,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { storeToken } from "../../services/LocalStorageService";
import { useRegisterUserMutation } from "../../services/userAuthAPI";
import { Box } from "@mui/system";
import NavBar from "../../components/base_components/NavBar";

const RegisterPage = () => {
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
      tc: data.get("tc"),
    };

    const res = await registerUser(actualData);

    if (res.error) {
      setError(res.error.data.errors);
    }
    if (res.data) {
      storeToken(res.data.token);
      navigate("/home");
    }
  };

  return (
    <>
      <NavBar />
      <Box
        noValidate
        id="registration-form"
        onSubmit={handleRegister}
        component="form"
      >
        <Container
          maxWidth="sm"
          sx={{
            transform: "translate(0%,40%)",
            boxShadow: "1px 1px 8px gray",
            borderRadius: "5px",
            padding: 2,
            background: "rgb(15 23 42)",
          }}
        >
          <Typography color="white" variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            type="name"
            name="name"
            id="name"
            InputLabelProps={{ style: { color: "#c9c9c9" } }}
            inputProps={{
              style: {
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              },
            }}
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "&:hover .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "blue" },
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
          />
          {error.name ? <Typography>{error.name[0]}</Typography> : ""}
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            name="email"
            id="email"
            InputLabelProps={{ style: { color: "#c9c9c9" } }}
            inputProps={{
              style: {
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              },
            }}
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "&:hover .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "blue" },
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
          />
          {error.email ? <Typography>{error.email[0]}</Typography> : ""}
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            name="password"
            id="password"
            InputLabelProps={{ style: { color: "#c9c9c9" } }}
            inputProps={{
              style: {
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              },
            }}
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "&:hover .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "blue" },
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
          />
          {error.password ? <Typography>{error.password[0]}</Typography> : ""}
          <TextField
            label="Confirm Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            name="password2"
            id="password2"
            InputLabelProps={{ style: { color: "#c9c9c9" } }}
            inputProps={{
              style: {
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              },
            }}
            sx={{
              "& .MuiInputLabel-root": { color: "white" },
              "&:hover .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "blue" },
              },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
            }}
          />
          {error.password ? <Typography>{error.password[0]}</Typography> : ""}
          <FormControlLabel
            sx={{ marginTop: "13px", color: "white" }}
            label="I agree to terms and conditions"
            control={
              <Checkbox
                value={true}
                sx={{
                  [`&, &.${checkboxClasses.disabled}`]: {
                    color: "white",
                  },
                }}
                color="primary"
                name="tc"
                id="tc"
              />
            }
          ></FormControlLabel>
          <Grid container justify="space-between" marginTop={5}>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginBottom: "10px", width: "100%" }}
              >
                Register
              </Button>
            )}
          </Grid>
          <Box marginTop={1}>
            {error.non_field_errors ? (
              <Alert severity="error">{error.non_field_errors[0]}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RegisterPage;
