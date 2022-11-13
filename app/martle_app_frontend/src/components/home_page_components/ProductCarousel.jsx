import React from "react";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

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

const style = 'flex h-20 border-2 border-white'

export default function ProductCarousel() {
    return (
        <div className="w-4/5 m-auto mt-32 justify-center">
            <Carousel responsive={responsive}>
                <div className={style}>Item 1</div>
                <div className={style}>Item 2</div>
                <div className={style}>Item 3</div>
                <div className={style}>Item 4</div>
                <div className={style}>Item 4</div>
                <div className={style}>Item 4</div>
                <div className={style}>Item 4</div>
                <div className={style}>Item 4</div>
            </Carousel>
        </div>
    )
}