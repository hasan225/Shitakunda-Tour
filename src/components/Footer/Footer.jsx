import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { FaQuora, FaRedditAlien } from "react-icons/fa";
import { Link } from "react-router-dom";
import { footerItem } from "../../data";

const Footer = () => {
  return (
    <div className="footer Section bg-gray-900 text-white">
      <div className="top flex-diverge sm:flex-col sm:text-center">
        <div className="logo">
          <Link
            to="/"
            className="text-3xl font-bold text-gray-200 hover:text-emerald-600 duration-300 uppercase"
          >
            Logo
          </Link>
          <p className="text-lg  pb-4 text-gray-300">
            Choose your Favorite Destination
          </p>
        </div>
        <div className="social flex-middle gap-8">
          <AiFillGithub className="social-icon" />
          <FaQuora className="social-icon" />
          <FaRedditAlien className="social-icon" />
          <BsStackOverflow className="social-icon" />
        </div>
      </div>
      <div className="bottom flex justify-between mt-8 sm:grid sm:gap-y-16 sm:grid-cols-2 sm:text-center">
        {footerItem.map((nav,i) => {
          return (
            <div className={`${nav.title}`} key={i}>
              <h3 className="font-semibold text-2xl capitalize text-gray-200 duration-300">{nav.title}</h3>
              <div className="fnav-items flex flex-col gap-2 mt-4">
                {nav.items.map((item,i) => {
                  return <Link key={i} className="text-gray-300 hover:text-emerald-600 duration-300">{item}</Link>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
