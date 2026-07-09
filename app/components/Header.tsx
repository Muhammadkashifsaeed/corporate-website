"use client"

import React, { useState } from "react";
import Image from "next/image";
import { FaRegWindowClose, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { TbSquareRoundedLetterP } from "react-icons/tb";

import Logo from "@/public/assets/images/logo.png";

const Header = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleHome = () => setIsHomeOpen((prev) => !prev);
  const toggleAbout = () => setIsAboutOpen((prev) => !prev);
  const toggleBlog = () => setIsBlogOpen((prev) => !prev);
  const togglePages = () => setIsPagesOpen((prev) => !prev);
  const toggleMobile = () => setIsMobileOpen((prev) => !prev);

  const menuItems = [
    { label: "Dashboard", href: "#" },
    { label: "Earning", href: "#" },
    { label: "Setting", href: "#" },
    { label: "Signout", href: "#" },
  ];

  const categories = [
    "Products",
    "New Item",
    "Fashion",
    "Appliance",
  ];

  return (
    <nav className="bg-white h-[70px] w-full flex shadow sticky top-0 z-50 justify-between px-3 py-3">
      
      <Image
        className="w-24 md:w-36 h-14 object-contain"
        src={Logo}
        alt="Logo"
      />

    
      <div className="md:flex justify-evenly items-center w-1/2 hidden">
       
        <div className="relative">
          <button
            onClick={toggleHome}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
          >
            Home
            <svg className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isHomeOpen && (
            <div className="z-10 bg-white divide-y rounded-lg shadow w-44 absolute top-full mt-1">
              <ul className="py-2 text-sm text-gray-700">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 text-gray-700">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      
        <div className="relative">
          <button
            onClick={toggleAbout}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
          >
            About
            <svg className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isAboutOpen && (
            <div className="z-10 bg-white divide-y rounded-lg shadow w-44 absolute top-full mt-1">
              <ul className="py-2 text-sm text-gray-700">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 text-gray-700">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

       
        <div className="relative">
          <button
            onClick={toggleBlog}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
          >
            Blog
            <svg className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isBlogOpen && (
            <div className="z-10 bg-white divide-y rounded-lg shadow w-44 absolute top-full mt-1">
              <ul className="py-2 text-sm text-gray-700">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 text-gray-700">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        
        <div className="relative">
          <button
            onClick={togglePages}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
          >
            Pages
            <svg className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isPagesOpen && (
            <div className="z-10 bg-white divide-y rounded-lg shadow w-44 absolute top-full mt-1">
              <ul className="py-2 text-sm text-gray-700">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 text-gray-700">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      
      <div className="flex md:w-1/3 justify-between items-center">
       
        <div className="md:flex hidden justify-center border-gray-300 h-full pr-1">
          <button className="bg-blue-600 rounded-full px-3.5 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 md:w-4 md:h-5 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25"
              />
            </svg>
          </button>
          <div className="flex flex-col justify-center pr-1 md:text-sm">
            <p className="text-gray-400">Hot Line Number</p>
            <p className="font-bold text-black">123 8989 444</p>
          </div>
        </div>

       
        <button className="border-gray-300 h-full px-3 mx-20 border-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-gray-400 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        
        <button onClick={toggleMobile} className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-blue-600 p-1 border-blue-600 border rounded-sm w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white w-[320px] h-full shadow-lg p-6 overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={toggleMobile}>
                <FaRegWindowClose className="text-blue-700 w-8 h-8 cursor-pointer" />
              </button>
            </div>

            <div className="flex justify-center mt-4">
              <Image
                className="w-32 h-16 object-contain"
                src={Logo}
                alt="Logo"
              />
            </div>

           
            <div className="py-2 mt-3">
              <p className="text-lg font-bold pt-1 text-black">Categories</p>
              <ul className="ml-5 text-base list-disc font-medium py-1 w-[150px] text-gray-500">
                {categories.map((category, index) => (
                  <li key={index} className="cursor-pointer hover:text-blue-600">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="py-2">
              <p className="text-lg font-bold py-1 text-black">Phone Number</p>
              <p className="text-base font-medium py-1 w-[150px] text-gray-500">
                +91 9833334534<br />+91 8453344
              </p>
            </div>

            
            <div className="py-2">
              <p className="text-lg font-bold py-1 text-black">Email Address</p>
              <p className="text-base font-medium py-1 w-[150px] text-gray-500">
                info@example.com<br />support@gmail.com
              </p>
            </div>

            
            <div className="flex justify-between mt-5 w-[85%] mx-auto">
              <FaFacebookF className="w-8 h-8 text-blue-600 cursor-pointer" />
              <FaTwitter className="w-8 h-8 text-blue-400 cursor-pointer" />
              <FaInstagram className="w-8 h-8 text-pink-500 cursor-pointer" />
              <TbSquareRoundedLetterP className="w-8 h-8 text-red-600 cursor-pointer" />
              <FaYoutube className="w-8 h-8 text-red-600 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
