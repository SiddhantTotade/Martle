import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const style = 'h-62 grid justify-items-center w-56 border-2 border-white rounded-xl text-white bg-gray-700'

const ProductCarousel = () => {

    const rows = []

    return (
        <div className="w-HeaderSwiper m-auto mt-32 justify-center">
            <Carousel className="flex" responsive={responsive}>
                <Paper sx={{ height: 300, padding: '7px' }}>
                    <Box>
                        <img className="flex rounded-md justify-center" src="https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="img" width={270} height={270} />
                    </Box>
                    <Typography>Hello</Typography>
                </Paper>
                <Paper sx={{ height: 300, padding: '7px' }}>
                    <Box>
                        <img className="rounded-md" src="https://plus.unsplash.com/premium_photo-1683140589868-4f9b38110050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="img2" />
                    </Box>
                    <Typography>Hello</Typography>
                </Paper>
                <Paper>
                    <Typography>Hello</Typography>
                </Paper>
                <Paper>
                    <Typography>Hello</Typography>
                </Paper>
                <Paper>
                    <Typography>Hello</Typography>
                </Paper>
                <Paper>
                    <Typography>Hello</Typography>
                </Paper>
                <Paper>
                    <Typography>Hello</Typography>
                </Paper>
                <Paper>
                    <Typography>Hello</Typography>
                </Paper>
                {/* {rows.map((item, images) => {
                    if (item.product_category === 'M') {
                        return item.product_images.map(({
                            product_image, ...rest
                        }) => {
                            return <div>
                                <Link to={`/api/product/id/${item.id}`} onClick={() => this.setState({ id: item.id })} className={style} >
                                    <div>
                                        <img src={'http://127.0.0.1:8000' + rest.product_img_file} alt="" className="h-60 w-full mt-2 rounded-lg" />
                                    </div>
                                    <div className="mt-3">
                                        <p>{item.product_title}</p>
                                        <p><small className="mt-0">₹</small><span> {item.product_discounted_price}</span></p>
                                    </div>
                                </Link>
                            </div>
                        })
                    }
                    else {
                        return null
                    }
                })} */}
            </Carousel >
        </div >
    )
}

export default ProductCarousel