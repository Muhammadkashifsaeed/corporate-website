import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbSquareRoundedLetterP } from "react-icons/tb";
import Image from "next/image";
import b_1 from "@/public/assets/images/blog/b-1.jpg";
import b_2 from "@/public/assets/images/blog/b-2.jpg";
import b_3 from "@/public/assets/images/blog/b-3.jpg";

const Contact = () => {
  return (
    <div className="bg-[#0a023a] shadow md:px-5 py-10 rounded-sm w-full md:m-0">
     
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <p className="text-white font-bold text-lg w-[200px]">
          Subscribe Newsletter for Latest Updates
        </p>
        <div className="bg-white my-2 pl-5 h-[26px] w-full md:w-1/2 md:mx-3 flex justify-between items-center rounded-xl md:rounded-full">
          <input 
            placeholder='E-mail Type...'
            className="border-none outline-none text-black bg-transparent" 
          />
          <button className="text-white bg-[#fdb705] rounded-xl md:rounded-full h-full px-2 md:px-7">
            SUBSCRIBE
          </button>
        </div>
        <div className="flex justify-between py-3 md:py-1 w-[300px] text-[#fff]">
          <FaFacebookF className="w-10 h-10 bg-[#3924b170] rounded-full p-2"/>
          <FaTwitter className="w-10 h-10 bg-[#3924b170] rounded-full p-2"/>
          <FaInstagram className="w-10 h-10 bg-[#3924b170] rounded-full p-2"/>
          <TbSquareRoundedLetterP className="w-10 h-10 bg-[#3924b170] rounded-full p-2"/>
          <FaYoutube className="w-10 h-10 bg-[#3924b170] rounded-full p-2"/>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex md:flex-row flex-col justify-between border-t-2 border-[#787cf] shadow-lg md:h-[250px] h-full w-full my-10">
        {/* Column 1 - About */}
        <div className="w-[300px] md:w-[350px] md:text-sm text-[#a7a7ef] pt-10">
          <h1 className="text-white text-3xl font-bold py-2">Apexa</h1>
          <p className="py-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus adipisci ea amet voluptate esse, natus fugiat ipsum labore, at, doloribus ab. Blanditiis, unde.</p>
          <button className="flex items-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25"
              />
            </svg>
            <p className="pl-2">+123 888 999</p>
          </button>
          <button className="flex items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5"
              />
            </svg>
            <p className="pl-2">Info@apexa.com</p>
          </button>
          <div className="flex justify-center py-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"
              />
            </svg>
            <p className="pl-2">
              Sydney Harbour Bridge Circular City of Sydney Australia.
            </p>
          </div>
        </div>

     
        <div className="text-[#a7a7ef] md:text-sm pt-10">
          <h1 className="text-xl md:text-sm font-semibold text-white">
            Information
          </h1>
          <p className="border-b-4 rounded-sm border-[#fdb705] w-10"></p>
          <p className="py-1">Information</p>
          <p className="py-1">About us</p>
          <p className="py-1">Meet our Team</p>
          <p className="py-1">Case stories</p>
          <p className="py-1">Latest News</p>
          <p className="py-1">Contact us</p>
        </div>

        {/* Column 3 - Top Links */}
        <div className="text-[#a7a7ef] md:text-sm pt-10">
          <h1 className="text-xl md:text-sm font-semibold text-white">
            Top Links
          </h1>
          <p className="border-b-4 rounded-sm border-[#fdb705] w-10"></p>
          <p className="py-1">How it works</p>
          <p className="py-1">About us</p>
          <p className="py-1">Partners</p>
          <p className="py-1">Case stories</p>
          <p className="py-1">Testimonials</p>
          <p className="py-1">Pricing</p>
        </div>

        
        <div className="text-[#a7a7ef] pt-10">
          <h1 className="text-xl md:text-sm font-semibold text-white">Instagram Posts</h1>
          <p className="border-b-4 rounded-sm border-[#fdb705] w-10"></p>
          <div className="mt-5 grid grid-cols-3 gap-3 md:gap-x-5">
            <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]">
              <Image 
                className="w-full h-full object-cover opacity-90 rounded-md"
                src={b_1}
                alt="post1"
              />
            </div>
            <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]">
              <Image 
                className="h-full w-full object-cover opacity-90 rounded-md"
                src={b_2}
                alt="post2"
              />
            </div>
            <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]">
              <Image 
                className="h-full w-full object-cover opacity-90 rounded-md"
                src={b_3}
                alt="post3"
              />
            </div>
            <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]">
              <Image 
                className="w-full h-full object-cover opacity-90 rounded-md"
                src={b_1}
                alt="post4"
              />
            </div>
            <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]">
              <Image 
                className="h-full w-full object-cover opacity-90 rounded-md"
                src={b_2}
                alt="post5"
              />
            </div>
            <div className="w-[100px] h-[100px] md:w-[70px] md:h-[70px]">
              <Image 
                className="h-full w-full object-cover opacity-90 rounded-md"
                src={b_3}
                alt="post6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;