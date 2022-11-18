import React from "react"
import NavBar from "../base_components/NavBar"
import Footer from '../base_components/Footer'
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from "react-slick";
import watch300 from '../product_page_components/asus_vivobook_2k3hnhx.png'
import watch1200 from '../product_page_components/asus_vivobook_2k3hnhx.png'
import Carousel from '../home_page_components/ProductCarousel'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#191970",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            product_data: []
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/product')
            .then((res) => res.json())
            .then(data => { this.setState({ product_data: data }) });
    }

    render() {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const rows = this.state.product_data

        rows.map((item, images) => {
            console.log(item.product_images);
            return item.product_images.map(({
                product_image, ...rest
            }) => {
                return console.log(rest.product_img_file);
            })
        })

        return (
            <>
                <NavBar />
                <div className="w-4/5 flex m-auto gap-10" >
                    <div className="flex justify-center w-2/5 border-2 border-gray-600">
                        <ReactSlick {...settings}>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    // width: 430,
                                    // height: 430,
                                    src: watch300,
                                },
                                largeImage: {
                                    src: watch1200,
                                    width: 1600,
                                    height: 1300
                                },
                                enlargedImageContainerDimensions: {
                                    width: '180%',
                                    height: '120%'
                                },
                                shouldUsePositiveSpaceLens: true,
                                isHintEnabled: true,
                                shouldHideHintAfterFirstActivation: false,
                            }} />
                        </ReactSlick>
                    </div>
                    <div className="flex flex-col justify-around items-center w-3/5 border-2 border-gray-600" >
                        {rows.map((item) => {
                            return (<div>
                                <div>
                                    <p>Product Name</p>
                                </div>
                                <div>
                                    <p>Product Price</p>
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
                            </div>)
                        })}
                    </div>
                </div>
                <Carousel />
                <div className="w-4/5 flex m-auto mt-32">
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">KEY</StyledTableCell>
                                    <StyledTableCell align="center">VALUE</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell align="center">Key</StyledTableCell>
                                    <StyledTableCell align="center">Value</StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Footer />
            </>
        )
    }
}