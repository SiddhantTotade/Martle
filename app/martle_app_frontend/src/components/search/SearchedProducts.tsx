import { Box, Typography } from "@mui/material";
import ProductCard from "../common/Card";

import Image from "../common/Image";
import { shortText } from "../common/utils/helperFunctions";

export default function SearchedProducts() {
  return (
    <Box sx={{ display: "flex" }}>
      <ProductCard sx={{ width: "20%", p: 1 }} elevation={5}>
        <Box>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvV1YZQ7NWBoFyykmFvgArtB4QLSL9CddlQ&usqp=CAU"
            alt="product_image"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Typography fontSize={13}>
            {shortText(
              `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            excepturi minima Asperiores fugiat vitae facere et accusamus dicta
            libero enim`,
              120
            )}
            ...
          </Typography>
        </Box>
      </ProductCard>
    </Box>
  );
}
