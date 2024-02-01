import { Box, Typography } from "@mui/material";

import Image from "../common/Image";

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
    <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          border: "1px solid",
          borderRadius: "3px",
          background: "#fff",
          p: 1,
        }}
      >
        <Image
          src={`http://127.0.0.1:8000${product.product_cover_image}`}
          alt="product_image"
          style={{
            display: "flex",
            width: "120px",
            height: "100px",
            objectFit: "scale-down",
          }}
        />
      </Box>
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
          {product.product_title}
        </Typography>
        <Typography fontSize="small">Quantity - {quantity}</Typography>
        <Typography fontSize="small">{status}</Typography>
      </Box>
    </Box>
  );
}
