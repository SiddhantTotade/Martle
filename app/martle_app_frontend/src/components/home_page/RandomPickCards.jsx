import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function RandomCardsPick() {
    return (
        <Router>
            <div className="flex w-4/5 justify-center mt-32 m-auto gap-20">
                <div className="w-2/5 h-64 border-emerald-400 border-2">
                    <Link to="/">
                        Mobiles
                    </Link>
                </div>
                <div className="w-2/5 h-30 border-emerald-400 border-2">
                    <Link to="/">
                        Mobiles
                    </Link>
                </div>
            </div>
        </Router>
    )
}