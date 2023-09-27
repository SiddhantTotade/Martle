import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Offers = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "start", gap: "10px" }}>
      <Paper
        sx={{
          width: "20%",
          gap: "5px",
          display: "grid",
          padding: "10px",
          cursor: "pointer",
          ":hover": { background: "#FCFFFF" },
        }}
        elevation={4}
      >
        <Grid2>
          <Typography fontSize={13} fontWeight="700">
            No Cost EMI
          </Typography>
        </Grid2>
        <Grid2>
          <Typography fontSize={12}>
            Upto ₹1200.45 EMI interest saving on selected credit cards
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", alignItems: "center", color: "#213bff" }}>
          <Typography fontSize={12}>Show more</Typography>
          <ChevronRightIcon fontSize="" />
        </Grid2>
      </Paper>
      <Paper
        sx={{
          width: "20%",
          gap: "5px",
          display: "grid",
          padding: "10px",
          cursor: "pointer",
          ":hover": { background: "#FCFFFF" },
        }}
        elevation={4}
      >
        <Grid2>
          <Typography fontSize={13} fontWeight="700">
            Bank Offer
          </Typography>
        </Grid2>
        <Grid2>
          <Typography fontSize={12}>
            Upto ₹1200.45 EMI interest saving on selected credit cards
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", alignItems: "center", color: "#213bff" }}>
          <Typography fontSize={12}>Show more</Typography>
          <ChevronRightIcon fontSize="" />
        </Grid2>
      </Paper>
      <Paper
        sx={{
          width: "20%",
          gap: "5px",
          display: "grid",
          padding: "10px",
          cursor: "pointer",
          ":hover": { background: "#FCFFFF" },
        }}
        elevation={4}
      >
        <Grid2>
          <Typography fontSize={13} fontWeight="700">
            Cashback
          </Typography>
        </Grid2>
        <Grid2>
          <Typography fontSize={12}>
            3 months plus membership + ₹1000 welcome on first purchase
          </Typography>
        </Grid2>
        <Grid2 sx={{ display: "flex", alignItems: "center", color: "#213bff" }}>
          <Typography fontSize={12}>Show more</Typography>
          <ChevronRightIcon fontSize="" />
        </Grid2>
      </Paper>
    </Box>
  );
};

export default Offers;
