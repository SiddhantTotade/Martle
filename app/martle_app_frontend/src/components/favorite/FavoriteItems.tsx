import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";
import { Box, Typography, CircularProgress } from "@mui/material";

import Image from "../common/Image";
import ProductCard from "../common/Card";
import PrirmaryButton from "../common/PrirmaryButton";
import { convertToINR } from "../common/utils/helperFunctions";
import SkeletonProductCard from "../common/ui/skeletons/SkeletonProductCard";
import AppContainer from "../common/Container";

interface Props {
  data?: any;
  getFavoriteIsLoading?: boolean;
  removeFavoriteIsLoading?: boolean;
  onSubmit?: any;
}

export default function FavoriteItems({
  data,
  getFavoriteIsLoading,
  removeFavoriteIsLoading,
  onSubmit,
}: Props) {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  return (
    <>
      {getFavoriteIsLoading ? (
        <SkeletonProductCard />
      ) : (
        <SkeletonProductCard />
        // <AppContainer
        //   sx={{
        //     display: "grid",
        //     mt: 0,
        //     gridTemplateColumns: "repeat(6, 1fr)",
        //     gap: "10px",
        //     "@media(max-width:1400px)": {
        //       gridTemplateColumns: "repeat(4, 1fr)",
        //     },
        //     "@media(max-width:1100px)": {
        //       gridTemplateColumns: "repeat(3, 1fr)",
        //     },
        //     "@media(max-width:800px)": {
        //       // width: "100%",
        //       display: "none",
        //     },
        //   }}
        // >
        //   {data?.map((product: any, index: number) => (
        //     <ProductCard
        //       key={index}
        //       elevation={5}
        //       sx={{
        //         width: "100%",
        //         display: "grid",
        //         gap: "5px",
        //         p: 1,
        //         border: "1px solid",
        //       }}
        //     >
        //       <Box
        //         sx={{
        //           display: "flex",
        //           justifyContent: "center",
        //           alignItems: "center",
        //           border: "1px solid",
        //           borderRadius: "5px",
        //           p: 1,
        //         }}
        //       >
        //         <Image
        //           src={`http://127.0.0.1:8000${product.product_cover_image}`}
        //           alt="product_image"
        //           style={{
        //             width: "150px",
        //             height: "150px",
        //             borderRadius: "5px",
        //             objectFit: "scale-down",
        //           }}
        //         />
        //       </Box>
        //       <Box sx={{ display: "grid", gap: "5px" }}>
        //         <Typography
        //           onClick={() => navigate(`/product/${product.product_slug}`)}
        //           sx={{
        //             display: "inline-block",
        //             width: "100%",
        //             whiteSpace: "nowrap",
        //             overflow: "hidden",
        //             textOverflow: "ellipsis",
        //             cursor: "pointer",
        //             "&:hover": {
        //               color: "#64b5f6",
        //             },
        //           }}
        //           fontSize="small"
        //         >
        //           {product.product_title}
        //         </Typography>
        //         <Box
        //           sx={{
        //             width: "100%",
        //             display: "flex",
        //             justifyContent: "space-around",
        //             alignItems: "end",
        //             gap: "10px",
        //           }}
        //         >
        //           <Typography>
        //             {convertToINR(product.product_discounted_price)}
        //           </Typography>
        //           <del style={{ fontSize: "13px" }}>
        //             {convertToINR(product.product_selling_price)}
        //           </del>
        //         </Box>
        //       </Box>
        //       {removeFavoriteIsLoading ? (
        //         <CircularProgress />
        //       ) : (
        //         <PrirmaryButton
        //           onClick={() =>
        //             onSubmit({ user: user.id, product: product.id })
        //           }
        //           label="Remove"
        //           variant="contained"
        //         />
        //       )}
        //     </ProductCard>
        //   ))}
        // </AppContainer>
      )}
    </>
  );
}
