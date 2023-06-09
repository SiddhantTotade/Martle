import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';

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
        <div className="w-HeaderSwiper m-auto mt-12 justify-center">
            <Carousel itemClass="carousel" partialVisbile={false} className="flex" responsive={responsive}>
                <Paper sx={{ height: 300, width: 270, gap: '10px', display: 'flex', flexDirection: 'column', ":hover": { cursor: 'pointer' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', maxHeight: '34vh' }}>
                        <img className="object-scale-down" src="https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_SY200_.jpg" alt="img" width="100px" />
                    </Box>
                    <Typography fontSize={12} sx={{ paddingLeft: '10px', paddingRight: '10px', ":hover": { color: '#078dfa' } }}>ASUS ROG Zephyrus M16 (2022), 16-inch (40.64 cms) 2K QHD 165Hz/3ms,  17"(43.18 cm) Backpack (Black)...</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography fontWeight='bold' fontSize={12} sx={{ padding: '4px' }}>$17</Typography>
                        <Box sx={{ display: 'flex', gap: '4px' }}>
                            <Typography fontWeight='bold' fontSize={12} sx={{ display: 'flex', alignItems: 'center', padding: '4px', borderRadius: '5px', background: 'gray', color: '#ffff', gap: '2px' }}>3.4<StarIcon fontSize="12" /></Typography>
                            <Typography fontWeight='bold' fontSize={12} sx={{ padding: '4px', borderRadius: '5px', background: 'crimson', color: '#ffff' }}>15% off</Typography>
                        </Box>
                    </Box>
                    <Button variant="contained" sx={{ borderRadius: 0, marginTop: 'auto' }} >Add to cart</Button>
                </Paper>
                <Paper sx={{ height: 300, gap: '10px', display: 'flex', flexDirection: 'column', ":hover": { cursor: 'pointer' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', maxHeight: '34vh' }} >
                        <img className="object-scale-down p-2" src="https://m.media-amazon.com/images/I/51ogrgGK+9L._AC_SY200_.jpg" alt="img" width="170px" />
                    </Box>
                    <Typography fontSize={12} sx={{ paddingLeft: '10px', paddingRight: '10px', ":hover": { color: '#078dfa' } }}>ASUS ROG Zephyrus M16 (2022), 16-inch (40.64 cms) 2K QHD 165Hz/3ms,  17"(43.18 cm) Backpack (Black)...</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography fontSize={12} sx={{ padding: '4px' }}>$17</Typography>
                        <Typography fontSize={12} sx={{ padding: '4px', borderRadius: '5px', background: 'crimson', color: '#ffff' }}>15% off</Typography>
                    </Box>
                    <Button variant="contained" sx={{ borderRadius: 0, marginTop: 'auto' }} >Add to cart</Button>
                </Paper>
                <Paper sx={{ height: 300, gap: '10px', display: 'flex', flexDirection: 'column', ":hover": { cursor: 'pointer' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh', maxHeight: '34vh' }} >
                        <img className="object-scale-down p-2" src="https://m.media-amazon.com/images/I/81ahHX9wU1L._AC_SY200_.jpg" alt="img" width="170px" />
                    </Box>
                    <Typography fontSize={12} sx={{ paddingLeft: '10px', paddingRight: '10px', ":hover": { color: '#078dfa' } }}>ASUS ROG Zephyrus M16 (2022), 16-inch (40.64 cms) 2K QHD 165Hz/3ms,  17"(43.18 cm) Backpack (Black)...</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Typography fontSize={12} sx={{ padding: '4px' }}>$17</Typography>
                        <Typography fontSize={12} sx={{ padding: '4px', borderRadius: '5px', background: 'crimson', color: '#ffff' }}>15% off</Typography>
                    </Box>
                    <Button variant="contained" sx={{ borderRadius: 0, marginTop: 'auto' }} >Add to cart</Button>
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