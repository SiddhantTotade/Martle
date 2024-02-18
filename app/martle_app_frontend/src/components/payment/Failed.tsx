import { Box, Typography } from "@mui/material";

import AppContainer from "../common/Container";
import FailedSvg from "./ui/FailedSvg";

export default function Failed() {
  return (
    <AppContainer>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="product Box-root"
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            margin: "auto",
            placeItems: "center",
            gap: "10px",
          }}
          className="description Box-root"
        >
          <Typography fontSize={20}>
            Transaction failed. Please try again
          </Typography>
          <FailedSvg />
        </Box>
      </Box>
    </AppContainer>
  );
}
