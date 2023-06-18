import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Alert,
  Typography,
  Box,
  Button,
  Grid,
  Link,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../services/userAuthAPI";
import { getToken, storeToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../features/authSlice";
import NavBar from "../../components/base_components/NavBar";

const LoginPage = () => {
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  let { access_token } = getToken();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const res = await loginUser(actualData);

    if (res.error) {
      setError(res.error.data.errors);
    }
    if (res.data) {
      storeToken(res.data.token);
      let { access_token } = getToken();
      dispatch(setUserToken({ access_token: access_token }));
      navigate("/api/home");
    }
  };

  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }));
  }, [access_token, dispatch]);

  return (
    <>
      <NavBar />
      <Box component="form" id="login-form" noValidate onSubmit={handleLogin}>
        <Container
          maxWidth="sm"
          sx={{
            transform: "translate(0%,70%)",
            boxShadow: "1px 1px 8px gray",
            borderRadius: "5px",
            padding: 2,
            background: "rgb(15 23 42)",
          }}
        >
          <Typography color="white" variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            autoComplete="off"
            type="email"
            name="email"
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
            required
            margin="normal"
            variant="outlined"
            type="password"
            name="password"
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
          <Grid
            container
            sx={{ display: "flex", justifyContent: "center" }}
            marginTop={5}
            paddingBottom={1}
          >
            {isLoading ? (
              <CircularProgress
                sx={{ display: "flex", justifyContent: "center" }}
              />
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginBottom: "10px", width: "100%" }}
              >
                Login
              </Button>
            )}
          </Grid>
          <Link href="/reset-password-email/">Forgot Password ?</Link>
          <Box marginTop={2}>
            {error.non_fields_errors ? (
              <Alert severity="error">{error.non_fields_errors}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;
