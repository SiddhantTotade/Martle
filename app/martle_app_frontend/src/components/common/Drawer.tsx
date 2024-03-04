import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import {
  Box,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { useLogout } from "@/hooks/auth/logout";

import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";

import { navLinks } from "./navbar/AllLinks";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    marginRight: "-3rem",
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function NavDrawer() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { onSubmit, isLoading } = useLogout();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "none",
        alignItems: "center",
        "@media(max-width:800px)": {
          display: "flex",
        },
      }}
    >
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" && <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navLinks.map((link, id) => (
            <React.Fragment key={id}>
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={() => navigate(link.link)}>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: "small" }}
                    primary={link.label}
                  />
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Divider />
        <List>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <ListItem onClick={onSubmit} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "small" }}
                  primary="Logout"
                />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
