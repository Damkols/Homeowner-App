import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import useOnClickOutside from "../../customHooks/ClickOutside";

interface NavbarProps {
  HamburgerColour?: string;
}

interface MenuProps {
  url?: string;
  path?: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ HamburgerColour }) => {
  const MenuLink: React.FunctionComponent<MenuProps> = ({ url, path }) => {
    return (
      <li className={styles.navLink}>
        <NavLink
          to={`${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };

  const [isNavOpen, setIsNavOpen] = useState<boolean | null>(false);
  const ref = useRef<HTMLUListElement>(null);
  useOnClickOutside(ref, () => setIsNavOpen(false));

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.navbar__logo}>
          <Link to="/">Sujimotu</Link>
        </div>

        {/* Navbar Hamburger */}
        <div
          className={styles.navbar__mobileMenu}
          style={{ color: HamburgerColour }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NavLinks */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar__navlist
          }`}
          ref={ref}
          // onClick={() => setIsNavOpen(true)}
        >
          {/* {isNavOpen ? ( */}
          <div
            className={styles.mobileClose}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>
          {/* ) : null} */}
          <MenuLink url="/" path="Home" />
          <MenuLink url="/buy" path="Buy" />
          <MenuLink url="/rent" path="Rent" />
          <MenuLink url="/search" path="Search" />
          <MenuLink url="/about" path="About" />
          <Link to="/auth" className={styles.login}>
            <span>Login</span>
          </Link>
        </ul>

        {/* Login */}
        <Link to="/auth" className={styles.containerLogin}>
          <span style={{ color: HamburgerColour }}>Login</span>
          <BsArrowRight style={{ color: HamburgerColour }} />
        </Link>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  HamburgerColour: "rgb(26, 55, 58)",
};

export default Navbar;
