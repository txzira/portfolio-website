"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-dark">
      <div className="container">
        <ul className="navbar-nav fw-semibold">
          <li className="nav-item nav-underline ">
            <Link href="#about" className="nav-link text-light">
              About
            </Link>
          </li>
          <li className="nav-item nav-underline">
            <Link href="#projects" className="nav-link text-light">
              Projects
            </Link>
          </li>
          <li className="nav-item nav-underline">
            <Link href="#socials" className="nav-link text-light">
              Socials
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
