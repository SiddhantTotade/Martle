import React from "react";
import NavBar from "../components/base_components/NavBar";
import Footer from "../components/base_components/Footer";
// import watch300 from "../product_page_components/asus_vivobook_2k3hnhx.png";
// import watch1200 from "../product_page_components/asus_vivobook_2k3hnhx.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductImageMagnifier from "../components/product_page_components/ProductImageMagnifier";
import { Box } from "@mui/material";

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

const Product = () => {
  // const {data=[],isLoading} =

  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         product_data: [], desc_data: {}
  //     }
  // }

  // componentDidMount() {
  //     let id = window.location.href
  //     id = id.charAt(id.length - 2) + id.charAt(id.length - 1)

  //     fetch(`http://127.0.0.1:8000/api/product/id/${id}`)
  //         .then((res) => res.json())
  //         .then(data => { this.setState({ product_data: data }) });

  //     fetch(`http://127.0.0.1:8000/api/product/desc/${id}`)
  //         .then((res) => res.json())
  //         .then(data => { this.setState({ desc_data: data }) });
  // }

  return (
    <>
      <NavBar />
      <Box
        sx={{
          border: "2px solid red",
          marginTop: "5rem",
        }}
      >
        <ProductImageMagnifier />
      </Box>
      {/* <div className="w-4/5 flex m-auto gap-10">
        <div className="flex justify-center w-2/5 border-2 border-gray-600">
          <ReactSlick {...settings}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  // width: 430,
                  // height: 430,
                  src: watch300,
                },
                largeImage: {
                  src: watch1200,
                  width: 1600,
                  height: 1300,
                },
                enlargedImageContainerDimensions: {
                  width: "180%",
                  height: "120%",
                },
                shouldUsePositiveSpaceLens: true,
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: false,
              }}
            />
          </ReactSlick>
        </div>
        <div className="flex flex-col justify-around items-center w-3/5 border-2 border-gray-600 text-white">
          {rows.map((item) => {
            return (
              <div>
                <div>
                  <p>{item.product_title}</p>
                </div>
                <div>
                  <p>{item.product_selling_price}</p>
                </div>
                <div>
                  <p>Product Stars</p>
                </div>
                <div>
                  <p>Buy Now</p>
                  <p>Add to Cart</p>
                </div>
                <div>
                  <p>Discount Table</p>
                </div>
                <div>
                  <p>Product Desc</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-4/5 flex m-auto mt-32">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  Product Description
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(desc).map((key) => (
                <StyledTableRow className="w-full">
                  <StyledTableCell className="w-2/4" align="center">
                    {key[0]}
                  </StyledTableCell>
                  <StyledTableCell className="w-2/4" align="center">
                    {key[1]}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> */}
      <Footer />
    </>
  );
};

export default Product;
