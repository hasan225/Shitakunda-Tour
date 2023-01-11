import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link, useLocation } from "react-router-dom";
import { navList } from "../../data";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="Navbar shadow-lg">
      <div className="logo ">
        <Link
          to=""
          className="text-3xl font-bold text-gray-700 hover:text-emerald-600 uppercase"
        >
          Logo
        </Link>
      </div>
      <div className="hidden md:block transform -translate-x-5 font-bold tracking-wider text-emerald-600">{location.state}</div>
      <button
        className="ham-menu hidden md:block text-3xl"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        {openMenu ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
      <ul
        className={`nav-menu md:shadow-lg rounded-b-lg md:gap-8 ${
          openMenu ? "md:translate-x-0" : "md:-translate-x-[105%]"
        }`}
      >
        {navList.map((nav, i) => {
          return (
            <li key={i}>
              <Link
                className={`${nav.cls} ${
                  location.state === nav.title && "bg-emerald-600 text-white"
                }`}
                to={nav.path}
                state={nav.title}
              >
                <i className={`${nav.icon} `}></i> {nav.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
