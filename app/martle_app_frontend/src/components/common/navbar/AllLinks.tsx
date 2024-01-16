import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessIcon from "@mui/icons-material/Business";
import InventoryIcon from "@mui/icons-material/Inventory";

export const navLinks = [
  { link: "Profile", icon: <AccountBoxIcon fontSize="small" /> },
  { link: "Orders", icon: <InventoryIcon fontSize="small" /> },
  { link: "Address", icon: <BusinessIcon fontSize="small" /> },
  { link: "Favorite", icon: <FavoriteIcon fontSize="small" /> },
  { link: "Cart", icon: <ShoppingCartIcon fontSize="small" /> },
];
