import { Box, Typography } from "@mui/material";

const styleBox = {
  width: "100%",
  display: "flex",
  gap: "10px",
};

const styleTypography = {
  width: "100%",
  display: "flex",
  justifyContent: "end",
};

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
    <Box sx={{ width: "100%" }}>
      <Box sx={styleBox}>
        <Typography fontWeight="bold" fontSize="small">
          Address
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {address}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography fontWeight="bold" fontSize="small">
          Locality
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {locality}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography fontWeight="bold" fontSize="small">
          City
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {city}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography fontWeight="bold" fontSize="small">
          State
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {state}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography fontWeight="bold" fontSize="small">
          Country
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {country}
        </Typography>
      </Box>
      <Box sx={styleBox}>
        <Typography fontWeight="bold" fontSize="small">
          Zipcode
        </Typography>
        <Typography sx={styleTypography} fontSize="small">
          {zipcode}
        </Typography>
      </Box>
    </Box>
  );
}
