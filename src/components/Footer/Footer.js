import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 px-16 my-10 mt-15 text-sm">
        <div>
          <img src="/company_logo.png" className="mb-5 w-28"></img>
          <p className="w-full md:w-2/3 text-gray-600">
            We are an e-commerce company providing our customers to access to
            all kinds of products ranging from household to office needs.We are
            an e-commerce company.
          </p>
          <div className="flex gap-6 mt-3 cursor-pointer">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+45 22001100</li>
            <li>info@shop.in</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2024@shop.in | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
