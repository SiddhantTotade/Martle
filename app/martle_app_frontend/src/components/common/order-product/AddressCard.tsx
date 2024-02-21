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

type PropsType = {
  [K in keyof Props]: K extends "address" ? string : string;
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
  const propsWithType: PropsType = {
    address: address || "",
    locality: locality || "",
    city: city || "",
    state: state || "",
    country: country || "",
    zipcode: zipcode || "",
  };

  return (
    <Box sx={{ width: "100%" }}>
      {Object.entries(propsWithType).map(([key, value], index) => (
        <Box key={index} sx={styleBox}>
          <Typography fontWeight="bold" fontSize="small">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Typography>
          <Typography sx={styleTypography} fontSize="small">
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
