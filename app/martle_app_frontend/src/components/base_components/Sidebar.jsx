import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Logout from "@mui/icons-material/Logout";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Component } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import PlaceIcon from "@mui/icons-material/PlaceOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <SwipeableDrawer {...this.props}>
            <Box sx={{ width: "300px" }} role="presentation">
              <div className="absolute right-5 p-1 cursor-pointer">
                <List>
                  <ListItem onClick={this.props.onClose} disablePadding>
                    <CloseOutlinedIcon />
                  </ListItem>
                </List>
              </div>
              <div className="flex justify-center mt-16">
                <Link
                  to="/"
                  className="font-title text-rose-600 text-xl tracking-widest hover:text-rose-700"
                >
                  martle
                </Link>
              </div>
              <List>
                <ListItem className="mt-16" disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AccountBoxOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Your Account" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List
                sx={{
                  "@media screen and (min-width: 510px)": { display: "none" },
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <PlaceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Address" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List
                sx={{
                  "@media screen and (min-width: 510px)": { display: "none" },
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText primary="Orders" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List
                sx={{
                  "@media screen and (min-width: 510px)": { display: "none" },
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Favourites" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List
                sx={{
                  "@media screen and (min-width: 510px)": { display: "none" },
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <Link to="/api/product-upload">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <CloudUploadOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Upload Product" />
                    </ListItemButton>
                  </ListItem>
                </Link>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    );
  }
}
