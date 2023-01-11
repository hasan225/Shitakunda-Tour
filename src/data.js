import React from "react";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineHome, AiOutlineExclamation } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { RiContactsBookLine } from "react-icons/ri";

const navList = [
  {
    title: "Home",
    icon: "fa-solid fa-house-user",
    path: "/",
    cls: "nav-link",
  },
  {
    title: "About",
    icon: "fa-solid fa-exclamation",
    path: "/about",
    cls: "nav-link",
  },
  {
    title: "Services",
    icon: "fa-solid fa-briefcase",
    path: "/services",
    cls: "nav-link",
  },
  {
    title: "Contact",
    icon: "fa-solid fa-envelope",
    path: "/contact",
    cls: "nav-link",
  },
  {
    title: "Sign Up",
    path: "/signup",
    cls: "btn",
  },
];
const footerItem = [
  {
    title: "project",
    items: ["Changelog", "Status", "License", "All Versions"],
  },
  {
    title: "community",
    items: ["Github", "Issues", "Project", "Twitter"],
  },
  {
    title: "help",
    items: ["Support", "TroubleShooting", "Contact Us"],
  },
  {
    title: "others",
    items: ["Terms of Services", "Privacy Policy", "License"],
  },
];

export { footerItem, navList };
