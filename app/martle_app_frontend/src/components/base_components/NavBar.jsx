import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { TextField, Box, Button } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const [scroll, setScroll] = useState(true);

  const locations = [
    "/api/login",
    "/api/register",
    "/api/user/reset-password",
    "/reset-password-email",
  ];

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScroll(window.pageYOffset === 0);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function checkLocation() {
    if (locations.includes(location.pathname)) {
      return true;
    }
  }

  function handleSidebar() {
    setSidebar(false);
  }

  return (
    <div className="border-white bg-slate-900 fixed sm:relative w-NavBar top-0 z-50 md:text-sm">
      <div className="flex items-center justify-evenly text-white gap-18 h-20 sm:h-12">
        <div
          className={`fixed -left-3 sm:hidden hover:cursor-pointer top-28 p-2 z-50 bg-white border-2 border-white rounded-3xl hover:translate-x-4 duration-300 ${
            checkLocation() ? "hidden" : "block"
          }`}
        >
          <div onClick={() => setSidebar(true)} className="left-3.5 p-2 m-0">
            <KeyboardArrowRightOutlinedIcon
              onClick={() => setSidebar(true)}
              className="text-blue-700 hover:cursor-pointer"
            />
          </div>
        </div>
        <Link
          to="/"
          className="font-title text-rose-600 tracking-widest text-xl hover:text-rose-700"
        >
          martle
        </Link>
        <Box
          onClick={() => setSidebar(true)}
          sx={{
            position: "absolute",
            left: 20,
            top: 15,
            "@media screen and (min-width: 510px)": { display: "none" },
          }}
        >
          <MenuIcon
            onClick={() => setSidebar(true)}
            sx={{ fontSize: "30px" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: 20,
            top: 15,
            "@media screen and (min-width: 510px)": { display: "none" },
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: "30px" }} />
        </Box>
        <div
          className={`hover:text-rose-500 sm:hidden ${
            checkLocation() ? "hidden" : "block"
          }`}
        >
          <Link to="/address" className="flex gap-1">
            <p>Address</p>
            <PlaceIcon
              sx={{ "@media (max-width: 1368px)": { fontSize: "20px" } }}
            />
          </Link>
        </div>
        <form
          action="#"
          method="post"
          className={`flex justify-center items-center sm:hidden ${
            checkLocation() ? "hidden" : "block"
          }`}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "50ch" },
              color: "white",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              InputLabelProps={{ style: { color: "#c9c9c9" } }}
              inputProps={{
                style: {
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "medium",
                },
              }}
              sx={{
                borderRadius: "0px 10px 10px 0px",
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "&:hover .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "blue",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderColor: "white",
                    borderRadius: "5px 0px 0px 5px",
                  },
                },
              }}
              id="outlined-search"
              label="Search Products"
              type="search"
            />
          </Box>
          <Button variant="contained" sx={{ borderRadius: "0px 5px 5px 0px" }}>
            <SearchIcon sx={{ fontSize: "x-large", height: "3.325vh" }} />
          </Button>
        </form>
        <div
          className={`hover:text-rose-500 sm:hidden ${
            checkLocation() ? "hidden" : "block"
          }`}
        >
          <Link to="/orders" className="flex gap-1">
            <p>Orders</p>
            <ShoppingBasketIcon
              sx={{ "@media (max-width: 1368px)": { fontSize: "20px" } }}
            />
          </Link>
        </div>
        <div
          className={`hover:text-rose-500 sm:hidden ${
            checkLocation() ? "hidden" : "block"
          }`}
        >
          <Link to="/orders" className="flex gap-1">
            <p>Favourites</p>
            <FavoriteIcon
              sx={{ "@media (max-width: 1368px)": { fontSize: "20px" } }}
            />
          </Link>
        </div>
        <div
          className={`hover:text-rose-500 sm:hidden ${
            checkLocation() ? "hidden" : "block"
          }`}
        >
          <Link to="/cart" className="flex gap-1">
            <p>Cart</p>
            <ShoppingCartIcon
              sx={{ "@media (max-width: 1368px)": { fontSize: "20px" } }}
            />
          </Link>
        </div>
      </div>
      <div
        className={`sm:block sm:h-18 sm:p-1 hidden sm:bg-slate-900 sm:w-NavBar sm:text-white ${
          scroll ? "sticky" : "fixed"
        } top-0`}
      >
        <form
          action="#"
          method="post"
          className="flex justify-center items-center"
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
              color: "white",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              InputLabelProps={{ style: { color: "#c9c9c9" } }}
              inputProps={{
                style: {
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "medium",
                },
              }}
              sx={{
                "& .MuiInputLabel-root": { color: "white" },
                "&:hover .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "blue" },
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "white" },
                },
              }}
              id="outlined-search"
              label="Search Products"
              type="search"
            />
          </Box>
          <Button variant="contained">
            <SearchIcon sx={{ fontSize: "x-large" }} />
          </Button>
        </form>
      </div>
      <Sidebar open={sidebar} onClose={() => handleSidebar()} />
    </div>
  );
};

export default NavBar;
