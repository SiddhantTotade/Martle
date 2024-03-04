import { Box, Paper, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import AppContainer from "../common/Container";

export default function Offers() {
  return (
    <Box sx={{ display: "flex", justifyContent: "start", gap: "10px" }}>
      <Paper
        sx={{
          gap: "5px",
          display: "grid",
          padding: "10px",
          cursor: "pointer",
        }}
        elevation={3}
      >
        <AppContainer sx={{ m: 0 }}>
          <Typography fontSize={13} fontWeight="700">
            No Cost EMI
          </Typography>
        </AppContainer>
        <AppContainer sx={{ m: 0 }}>
          <Typography fontSize={12}>
            Upto ₹1200.45 EMI interest saving on selected credit cards
          </Typography>
        </AppContainer>
        <AppContainer sx={{ m: 0, display: "flex", alignItems: "center" }}>
          <Typography color="primary" fontSize={12}>
            Show more
          </Typography>
          <ChevronRightIcon color="primary" fontSize="small" />
        </AppContainer>
      </Paper>
      <Paper
        sx={{
          gap: "5px",
          display: "grid",
          padding: "10px",
          cursor: "pointer",
        }}
        elevation={3}
      >
        <AppContainer sx={{ m: 0 }}>
          <Typography fontSize={13} fontWeight="700">
            Bank Offer
          </Typography>
        </AppContainer>
        <AppContainer sx={{ m: 0 }}>
          <Typography fontSize={12}>
            Upto ₹1200.45 EMI interest saving on selected credit cards
          </Typography>
        </AppContainer>
        <AppContainer sx={{ m: 0, display: "flex", alignItems: "center" }}>
          <Typography color="primary" fontSize={12}>
            Show more
          </Typography>
          <ChevronRightIcon color="primary" fontSize="small" />
        </AppContainer>
      </Paper>
      <Paper
        sx={{
          gap: "5px",
          display: "grid",
          padding: "10px",
          cursor: "pointer",
        }}
        elevation={3}
      >
        <AppContainer sx={{ m: 0 }}>
          <Typography fontSize={13} fontWeight="700">
            Cashback
          </Typography>
        </AppContainer>
        <AppContainer sx={{ m: 0 }}>
          <Typography fontSize={12}>
            3 months plus membership + ₹1000 welcome on first purchase
          </Typography>
        </AppContainer>
        <AppContainer sx={{ m: 0, display: "flex", alignItems: "center" }}>
          <Typography color="primary" fontSize={12}>
            Show more
          </Typography>
          <ChevronRightIcon color="primary" fontSize="small" />
        </AppContainer>
      </Paper>
    </Box>
  );
}
