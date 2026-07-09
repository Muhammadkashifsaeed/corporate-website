import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiPayMoney, GiFlyingBeetle } from "react-icons/gi";
import { GoBriefcase } from "react-icons/go";
import { PiPopcornBold } from "react-icons/pi";
import { SiHappycow } from "react-icons/si";
import { BsTriangleFill } from "react-icons/bs";
import { MdOutlineAgriculture, MdOutlineWaterDrop } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const Services = () => {
  return (
    <section className="bg-[#3e3b5a]">
      <div className="py-16 md:py-28">
        <div className="container mx-auto px-4">
          
          <div className="w-full items-center flex flex-row justify-center mb-12">
            <h1 className="font-semibold w-full md:w-[500px] text-center text-2xl md:text-4xl text-[#fff] leading-tight">
              Serving our across the <br className="hidden md:block" /> divers industries.
            </h1>
          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
       
            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <FaMicrophoneAlt className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">PUBLISHING</p>
            </div>

          
            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <GiPayMoney className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">FINANCE</p>
            </div>

           
            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <GiFlyingBeetle className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">SCIENCE</p>
            </div>

            
            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <GoBriefcase className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">CONSULTANT</p>
            </div>

            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <PiPopcornBold className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">FOOD</p>
            </div>

            
            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <SiHappycow className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">DAIRY</p>
            </div>

            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <BsTriangleFill className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">JEWELLERY</p>
            </div>

            
            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <MdOutlineAgriculture className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">ENERGY</p>
            </div>

          
            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <MdOutlineWaterDrop className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">FARMING</p>
            </div>

            <div className="flex flex-col justify-center items-center border border-[#605c84] p-6 md:p-8 rounded-lg hover:border-white hover:bg-[#4a4670] transition-all duration-300 group cursor-pointer">
              <IoSettingsOutline className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
              <p className="text-white text-xs md:text-base lg:text-lg pt-4 text-center font-medium">INDUSTRIES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;