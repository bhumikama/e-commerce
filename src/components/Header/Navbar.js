"use client";
import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { CartContext } from "@/app/context/CartContext";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logoLinkContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <img src="/company_logo.png" alt="Logo" className="w-12" />
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/shop">SHOP</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.iconContainer}>
          <Link href="/loginSignUp">
            <FaRegUser size={22} />
          </Link>
          <Link href="/cart">
            <Badge
              badgeContent={cartItems.length === 0 ? "0" : cartItems.length}
              color="primary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <RiShoppingBagLine size={22} />
            </Badge>
          </Link>
          <FiHeart size={22} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
