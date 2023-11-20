import { Box } from "@mui/material";

export default function ActionContainer({ children }: any) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
}
