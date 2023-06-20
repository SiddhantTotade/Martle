import React, { useState } from "react";
import {
  Container,
  TextField,
  Alert,
  Typography,
  Box,
  Button,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useResetPasswordMutation } from "../../services/userAuthAPI";
import NavBar from "../../components/base_components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [error, setError] = useState({});

  const [successMsg, setSuccessMsg] = useState([]);

  const [passwordReset, responsePasswordReset] = useResetPasswordMutation();

  const { id, token } = useParams();

  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      password2: data.get("password2"),
    };

    const res = await passwordReset({ actualData, id, token });

    if (res.error) {
      setSuccessMsg({});
      setError(res.error.data.errors);
    }
    if (res.data) {
      setError({});
      setSuccessMsg(res.data);
      document.getElementById("password-reset-form").reset();
      setTimeout(() => {
        navigate("/api/login");
      }, 3000);
    }
  };

  return (
    <>
      <NavBar />
      <Box
        component="form"
        id="password-reset-form"
        noValidate
        onSubmit={handlePasswordReset}
      >
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
          <Typography variant="h4" align="center" color="white" gutterBottom>
            Reset Password
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            name="password"
            label="New Password"
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
          {error.password ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {error.password[0]}
            </Typography>
          ) : (
            ""
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password2"
            name="password2"
            label="New Confirm Password"
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
          {error.password2 ? (
            <Typography style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {error.password2[0]}
            </Typography>
          ) : (
            ""
          )}
          <Grid
            container
            sx={{ display: "flex", justifyContent: "center" }}
            marginTop={5}
            paddingBottom={1}
          >
            {responsePasswordReset.isLoading ? (
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
                Reset
              </Button>
            )}
          </Grid>
          <Box marginTop={2}>
            {error.non_fields_errors ? (
              <Alert severity="error">{error.non_fields_errors}</Alert>
            ) : (
              ""
            )}
            {successMsg.msg ? (
              <Alert severity="success">{successMsg.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ResetPassword;
