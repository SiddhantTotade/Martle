import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-28 bg-slate-900 flex items-center justify-center flex-col mt-32 gap-2">
      <div className="h-15 flex justify-center items-center gap-5">
        <Link
          to="/"
          className="font-title text-rose-600 text-xl tracking-widest hover:text-rose-700"
        >
          martle
        </Link>
        <ReactCountryFlag
          countryCode="IN"
          className="emojiFlag"
          style={{ fontSize: "2.3rem", lineHeight: "1rem" }}
          title="INDIA"
        />
      </div>
      <div className="h-15 flex justify-center items-center text-white">
        <small className="tracking-wider sm:tracking-normal">
          Copyright | All rights reserved by SIDDHANT TOTADE
        </small>
      </div>
    </footer>
  );
}
