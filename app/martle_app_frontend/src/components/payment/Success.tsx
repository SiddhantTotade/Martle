import { Box, Typography } from "@mui/material";

import SuccessSvg from "./ui/SuccessSvg";
import AppContainer from "../common/Container";

export default function Success() {
  return (
    <AppContainer>
      <Box sx={{ width: "100%", margin: "auto" }} className="product Box-root">
        <Box
          sx={{
            width: "50%",
            display: "grid",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
          className="description Box-root"
        >
          <Typography fontSize={20}>
            Thank you for purchasing from us
          </Typography>
          <SuccessSvg />
        </Box>
      </Box>
    </AppContainer>
  );
}
