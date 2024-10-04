import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Auth/AuthUser";

function HeroSection() {
  const { authUser } = useAuthContext();
  return (
    <>
      <div id="hero-section">
        {/* sm md lg xl */}
        <div className="container m-auto">
          <div className="max-w-[860px] py-24 px-2 sm:px-6 m-auto">
            <h2 className="text-white text-center text-3xl xl:text-5xl md:text-5xl leading-10  ">
              Find What You Love, Buy What You Need
            </h2>
            <h2 className="text-white text-center text-10px xl:text-20px xl:mt-4">
              Shop the best products at <span className="logo">QUICKBUY</span>,
              where quality meets convenience. Discover a wide range of items,
              from trendy essentials to unique finds, all at unbeatable prices.
            </h2>
            {authUser != null ? (
               <button className="my-3 px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center m-auto">
               <Link to="">Get started</Link>
             </button>
            ) : (
              <button className="my-3 px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center m-auto">
                <Link to="/login">Sign Up for free</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
