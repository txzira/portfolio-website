"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-primary-subtle">
      <div className="container">
        <ul className="navbar-nav fw-semibold">
          <li className="nav-item nav-underline">
            <Link href="#about" className="nav-link ">
              About
            </Link>
          </li>
          <li className="nav-item nav-underline">
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item nav-underline">
            <Link href="#socials" className="nav-link">
              Socials
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
