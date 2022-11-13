import React from "react"
import NavBar from "../base_components/NavBar"
import Footer from '../base_components/Footer'
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from "react-slick";
import watch300 from '../product_page_components/asus_vivobook_2k3hnhx.png'
import watch1200 from '../product_page_components/asus_vivobook_2k3hnhx.png'
export default class Product extends React.Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <>
                <NavBar />
                <div className="w-4/5 h-96 border-white border-2 m-auto" >
                    {/* <ReactSlick> */}
                    <div className="flex border-2 border-gray-600">
                        <ReactImageMagnify className="border-red-700 border-2 w-4/5 object-contain" {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                // isFluidWidth: true,
                                width: 300,
                                height: 300,
                                src: watch300,
                            },
                            largeImage: {
                                src: watch1200,
                                width: 2000,
                                height: 1200
                            },
                            enlargedImageContainerDimensions: {
                                width: '400%',
                                height: '200%'
                            },
                            shouldUsePositiveSpaceLens: true,
                            isHintEnabled: true,
                            shouldHideHintAfterFirstActivation: false,
                            // enlargedImagePortalId: 'portal'
                        }} />
                        {/* <div
                            id="portal"
                            className="portal"
                        /> */}
                    </div>
                    {/* </ReactSlick> */}
                    <div></div>
                </div>
                <Footer />
            </>
        )
    }
}