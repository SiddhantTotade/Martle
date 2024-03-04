import { Box, Toolbar, Tooltip, Typography } from "@mui/material";

import AppContainer from "../Container";
import { footerLinks } from "./FooterLinks";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Toolbar
        sx={{
          width: "100%",
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "transparent",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid",
        }}
      >
        <Typography color="#2196f3" fontSize={30}>
          Martle
        </Typography>
        <Typography color="#2196f3" fontSize="small">
          Project Website
        </Typography>
        <AppContainer
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            mt: 1,
            color: "#2196f3",
          }}
        >
          {footerLinks.map((link, id) => (
            <Tooltip sx={{ cursor: "pointer" }} key={id} title={link.label}>
              {link.icon}
            </Tooltip>
          ))}
        </AppContainer>
      </Toolbar>
    </Box>
  );
}
