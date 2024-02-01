import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessIcon from "@mui/icons-material/Business";
import InventoryIcon from "@mui/icons-material/Inventory";

export const navLinks = [
  {
    label: "Profile",
    link: "my-profile",
    icon: <AccountBoxIcon fontSize="small" />,
  },
  {
    label: "Orders",
    link: "my-orders",
    icon: <InventoryIcon fontSize="small" />,
  },
  {
    label: "Address",
    link: "my-addresses",
    icon: <BusinessIcon fontSize="small" />,
  },
  {
    label: "Favorite",
    link: "my-favorites",
    icon: <FavoriteIcon fontSize="small" />,
  },
  {
    label: "Cart",
    link: "my-cart",
    icon: <ShoppingCartIcon fontSize="small" />,
  },
];
