import { RootState } from "@reduxjs/toolkit/query";
import { Box, Divider, Typography } from "@mui/material";

import AppContainer from "../common/Container";
import { useSelector } from "react-redux";
import ChangePassword from "./modal/ChangePasswordModal";
import { convertToINR } from "../common/utils/helperFunctions";
import TransferMoney from "./modal/TransferMoneyModal";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <AppContainer sx={{ mt: 10 }}>
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
      <Divider
        orientation="horizontal"
        sx={{
          width: "30%",
          margin: "auto",
          "@media(max-width:600px)": { width: "60%" },
        }}
      />
      <Box
        sx={{
          width: "20%",
          margin: "auto",
          display: "grid",
          gap: "10px",
          "@media(max-width:600px)": { width: "90%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          <Typography>{user.name}</Typography>
          <Typography>{user.email}</Typography>
        </Box>
        <ChangePassword />
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography fontSize={12}>Martle Bank</Typography>
            <Typography fontSize={12}>Martle Pay</Typography>
          </Box>
          <Box>
            <Typography fontSize={12}>
              {convertToINR(user.martle_bank)}
            </Typography>
            <Typography fontSize={12}>
              {convertToINR(user.martle_pay)}
            </Typography>
          </Box>
        </Box>
        <TransferMoney />
      </Box>
    </AppContainer>
  );
}
