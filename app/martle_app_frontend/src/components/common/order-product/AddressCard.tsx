import { Box, Typography } from "@mui/material";

interface Props {
  address?: string;
  locality?: string;
  city?: string;
  state?: string;
  country?: string;
  zipcode?: string;
}

export default function AddressCard({
  address,
  locality,
  city,
  state,
  country,
  zipcode,
}: Props) {
  return (
    <>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography fontWeight="bold" fontSize="small">
          Address -{" "}
        </Typography>
        <Typography fontSize="small">{address}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography fontWeight="bold" fontSize="small">
          Locality -{" "}
        </Typography>
        <Typography fontSize="small">{locality}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography fontWeight="bold" fontSize="small">
          City -{" "}
        </Typography>
        <Typography fontSize="small">{city}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography fontWeight="bold" fontSize="small">
          State -{" "}
        </Typography>
        <Typography fontSize="small">{state}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography fontWeight="bold" fontSize="small">
          Country -{" "}
        </Typography>
        <Typography fontSize="small">{country}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 0.5 }}>
        <Typography fontWeight="bold" fontSize="small">
          Zipcode -{" "}
        </Typography>
        <Typography fontSize="small">{zipcode}</Typography>
      </Box>
    </>
  );
}
