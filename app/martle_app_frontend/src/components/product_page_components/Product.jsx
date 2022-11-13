import React from "react"
import NavBar from "../base_components/NavBar"
import Footer from '../base_components/Footer'

export default class Product extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="w-4/5 border-white border-2 m-auto" >
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}