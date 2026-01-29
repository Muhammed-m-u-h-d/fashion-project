import React from "react";
import { Link } from "react-router-dom";
function HeroBanner() {
  return (
    <div className="relative sansation-light ">
      <img
        src="/homepage/herobanner.png"
        alt="Modern streetwear hero banner"
        className="w-full h-full object-cover  bg-gray-500/20 "
      />
      <div className="absolute bottom-[3rem] left-6  leading-[3rem]">
        <h1 className="text-4xl w-32 cormorant-garamond text-black/75">
          Modern StreetWear.
        </h1>
        <p className="text-gray-500 ">New Collection 2026</p>
        <Link
          to={"/products"}
          className="bg-white p-2 w-32 text-lg rounded-sm active:scale-95 transition-all font-semibold "
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default HeroBanner;
