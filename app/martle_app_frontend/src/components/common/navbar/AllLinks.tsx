import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessIcon from "@mui/icons-material/Business";
import InventoryIcon from "@mui/icons-material/Inventory";

export const navLinks = [
  {
    label: "Profile",
    link: "/profile",
    icon: <AccountBoxIcon fontSize="small" />,
  },
  {
    label: "Orders",
    link: "/orders",
    icon: <InventoryIcon fontSize="small" />,
  },
  {
    label: "Address",
    link: "/addresses",
    icon: <BusinessIcon fontSize="small" />,
  },
  {
    label: "Favorite",
    link: "/favorites",
    icon: <FavoriteIcon fontSize="small" />,
  },
  {
    label: "Cart",
    link: "/cart",
    icon: <ShoppingCartIcon fontSize="small" />,
  },
];
