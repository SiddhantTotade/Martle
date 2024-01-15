import { Box, Link } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessIcon from "@mui/icons-material/Business";
import InventoryIcon from "@mui/icons-material/Inventory";

const navLinks = [
  { link: "Orders", icon: <InventoryIcon fontSize="small" /> },
  { link: "Address", icon: <BusinessIcon fontSize="small" /> },
  { link: "Favorite", icon: <FavoriteIcon fontSize="small" /> },
  { link: "Cart", icon: <ShoppingCartIcon fontSize="small" /> },
];

export default function Navlinks() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
      {navLinks.map((links, id) => (
        <Link
          sx={{
            display: "flex",
            gap: "3px",
            alignItems: "center",
            "&:hover":{
                color:"#e3f2fd"
            }
          }}
          fontSize={14}
          color="inherit"
          href="#"
          key={id}
        >
          {links.link}
          {links.icon}
        </Link>
      ))}
    </Box>
  );
}
