import { AppBar, Box, Toolbar, Tooltip, Typography } from "@mui/material";

import AppContainer from "../Container";
import { footerLinks } from "./FooterLinks";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#1a237e" }} position="static">
        <Toolbar
          sx={{
            height: "30vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography fontSize={30}>Martle</Typography>
          <AppContainer
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              mt: 1,
            }}
          >
            {footerLinks.map((link, id) => (
              <Tooltip sx={{ cursor: "pointer" }} key={id} title={link.label}>
                {link.icon}
              </Tooltip>
            ))}
          </AppContainer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
