import React from "react";
import { Link } from "react-router-dom";

export default function RandomCardsPick() {
    return (
        <div className="flex w-4/5 justify-center mt-32 m-auto gap-20">
            <div className="w-2/5 h-64 border-emerald-400 border-2">
                <Link to="/mobiles">
                    Mobiles
                </Link>
            </div>
            <div className="w-2/5 h-30 border-emerald-400 border-2">
                <Link to="/laptops">
                    Laptops
                </Link>
            </div>
        </div>
    )
}