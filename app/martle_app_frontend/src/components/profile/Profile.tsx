import { RootState } from "@reduxjs/toolkit/query";
import { Box, Divider, Typography } from "@mui/material";

import AppContainer from "../common/Container";
import { useSelector } from "react-redux";
import ChangePassword from "./modal/ChangePasswordModal";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <AppContainer sx={{ mt: "6rem" }}>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <Typography
          fontSize={20}
          sx={{ display: "flex", alignItems: "end", padding: "5px" }}
        >
          Welcome,
        </Typography>
        <Typography fontSize={30}>{user.name}</Typography>
      </Box>
      <Divider orientation="horizontal" sx={{ width: "30%", margin: "auto" }} />
      <Box sx={{ width: "20%", margin: "auto", display: "grid", gap: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Typography>Name</Typography>
          <Typography>{user.name}</Typography>
        </Box>
        <>
          <Typography>{user.email}</Typography>
        </>
        <ChangePassword />
      </Box>
    </AppContainer>
  );
}
