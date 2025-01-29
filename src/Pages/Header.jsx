import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { useAuthContext } from "../Auth/AuthUser";
import { IoIosLogOut } from "react-icons/io";
import Listings from "../Auth/Listing";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  console.log("Header", authUser);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const navigate = useNavigate();
  function Logout() {
    localStorage.removeItem("quickbuy");
    localStorage.removeItem("token");
    setAuthUser(null);
    window.location.href = "/login";
  }
  return (
    <>
      <header id="header" className="sticky top-5 left-0">
        <div className="container m-auto">
          <nav className="p-3 mx-auto py-5">
            <div className="flex justify-between max-w-screen-xl">
              <Link
                to="/"
                className="text-white font-black text-bold text-[30px] ms-3"
              >
                Quick<span className="logo">Buy</span>
              </Link>
              <div className="list">
                <ul
                  className={isOpen ? "active" : "flex justify-between links"}
                >
                  <li>
                    <Link to="/">Favourites</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li
                    className={
                      authUser && authUser.email === "gullukumar3108@gmail.com"
                        ? ""
                        : "hidden"
                    }
                  >
                    <Link to="/addproducts">Add Products</Link>
                  </li>
                </ul>
              </div>
              {authUser != null ? (
                <div
                  className={
                    isOpen
                      ? "activeuser flex justify-between"
                      : "links loginbtn px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center"
                  }
                >
                  <button className="mr-3">{authUser.name}</button>
                  <Link onClick={Logout} className="mt-1 text-xl">
                    <IoIosLogOut />
                  </Link>
                </div>
              ) : (
                <div
                  className={
                    isOpen
                      ? "activeuser flex justify-between"
                      : "links loginbtn px-3 py-2 rounded-2xl text-white text-[20px] text-center bg-main flex items-center"
                  }
                >
                  <Link to="/login">
                    <button>Login Now</button>
                  </Link>
                </div>
              )}
              <div
                className="text-white text-4xl pr-4 pt-1 cursor-pointer hidden icon"
                onClick={toggleMenu}
              >
                <FaBars />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
