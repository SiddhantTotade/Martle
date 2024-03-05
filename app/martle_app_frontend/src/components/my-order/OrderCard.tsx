import { Box, Typography } from "@mui/material";

import Image from "../common/Image";
import { shortText } from "../common/utils/helperFunctions";

interface Props {
  product: any;
  quantity: number;
  status: string;
  dateTime: string;
}

export default function OrderCard({
  quantity,
  product,
  status,
  dateTime,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Image
        src={`http://127.0.0.1:8000${product.product_cover_image}`}
        alt="product_image"
        sx={{ border: "1px solid" }}
        style={{
          display: "flex",
          width: "100px",
          height: "100px",
          objectFit: "contain",
          maxWidth: "100%",
          padding: "5px",
        }}
      />
      <Box sx={{ width: "100%", display: "grid" }}>
        <Typography fontSize="small">
          {new Date(dateTime).toDateString()}
        </Typography>
        <Typography
          fontSize="small"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {shortText(product.product_title, 40)}...
        </Typography>
        <Typography fontSize="small">Quantity - {quantity}</Typography>
        <Typography fontSize="small">{status}</Typography>
      </Box>
    </Box>
  );
}
