import React from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import watch300 from "../product_page_components/asus_vivobook_2k3hnhx.png";
import watch1200 from "../product_page_components/wristwatch.jpg";
import {
  MagnifierContainer,
  MagnifierZoom,
  MagnifierPreview,
} from "react-image-magnifiers";

import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";
import ImageMagnifier from "../base_components/ImageMagnifier";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#191970",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductImageMagnifier = () => {
  return (
    <Box
      sx={{
        height: "70vh",
      }}
    >
      {/* <ImageMagnifier src={watch300} /> */}
      <SideBySideMagnifier
        style={{ width: "500px" }}
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s"
        imageAlt="Image"
        largeImageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s"
        largeImageAlt="Large Image"
        alwaysInPlace={true}
        transitionSpeed={0.5}
        fillAvailableSpace={true}
        fillAlignTop={true}
      />
      {/* <MagnifierContainer>
        <div className="example-class">
          <MagnifierPreview
            style={{ width: "300px" }}
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s"
          />
          <MagnifierZoom
            style={{ height: "500px", width: "500px" }}
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s"
          />
        </div>
      </MagnifierContainer> */}
    </Box>
  );
};

export default ProductImageMagnifier;
