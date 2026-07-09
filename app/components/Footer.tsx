import React from 'react';
import { FaAirbnb, FaDiscord } from "react-icons/fa";
import { GrNorton } from "react-icons/gr";
import { BiWater } from "react-icons/bi";
import { SiDoordash, SiVuedotjs } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#0a023a] text-[#b9b9de] md:flex md:justify-around md:text-sm items-center md:px-5 md:mt-1 md:m-0 w-full grid grid-cols-3 gap-3 py-10 mt-1">
      <div className="flex justify-center items-center">
        <FaAirbnb className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">Airbnb</p>
      </div>
      <div className="flex justify-center items-center">
        <GrNorton className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">
          <span className="font-light">nature</span>wave
        </p>
      </div>
      <div className="flex justify-center items-center">
        <BiWater className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-semibold pl-2">Airbnb</p>
      </div>
      <div className="flex justify-center items-center">
        <FaDiscord className="w-12 h-12 rounded-full p-2" />
        <p className="text-xl font-bold pl-2">Discord</p>
      </div>
      <div className="flex justify-center items-center">
        <SiDoordash className="w-12 h-12 rounded-full p-2" />
        <p className="text-lg font-semibold pl-2">DOORDASH</p>
      </div>
      <div className="flex justify-center items-center">
        <SiVuedotjs className="w-12 h-12 rounded-full p-2" />
        <p className="text-lg font-semibold pl-2">CENTRIC</p>
      </div>
    </div>
  );
};

export default Footer;