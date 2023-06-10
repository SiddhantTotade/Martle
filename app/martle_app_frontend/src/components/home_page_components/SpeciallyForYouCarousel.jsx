import { Button, Paper, Typography } from "@mui/material";
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

const SpeciallyForYouCarousel = () => {

    const rows = []

    return (
        <div className="w-HeaderSwiper m-auto mt-12 justify-center">
            <Typography fontSize={30} sx={{ color: '#fff', marginLeft: '10px', marginBottom: '5px', letterSpacing: '2px', fontFamily: 'fantasy' }}>Specially for You</Typography>
            <Carousel itemClass="carousel" partialVisbile={false} className="flex" responsive={responsive}>
                <Paper elevation={16} sx={{ width: 270 }} >
                    <div class="container">
                        <div class="card">
                            <div class="content">
                                <div class="imgBx">
                                    <img className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9NjzZjN0NV8LPiNPM7HCeYJj-KkkR2vdKg&usqp=CAU" alt="img" />
                                </div>
                                <div class="contentBx">
                                    <Typography fontSize={20} sx={{ marginTop: '20px', color: 'black' }} >Xiaomi</Typography>
                                </div>
                            </div>
                            <ul class="sci">
                                <li>
                                    <Button variant="contained" >Shop</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Paper>
            </Carousel >
        </div >
    )
}

export default SpeciallyForYouCarousel