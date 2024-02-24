import { Box } from "@mui/material";
import { helix } from "ldrs";

helix.register();

export default function SuspenseLoader() {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <l-helix size="45" speed="1" color="#1e88e5"></l-helix>
    </Box>
  );
}
