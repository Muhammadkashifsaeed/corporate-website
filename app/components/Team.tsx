import React from 'react';
import t_1 from "@/public/assets/images/team/t-1.jpg";
import t_2 from "@/public/assets/images/team/t-2.jpg";
import t_3 from "@/public/assets/images/team/t-3.jpg";
import t_4 from "@/public/assets/images/team/t-4.jpg";
import Image from "next/image";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <section className="team_sec bg-white py-20">
      <div className="container px-16">
        <div className="title_part">
          <h5 className="bg-[#0055FF] text-white inline-block rounded-full px-3 py-2 font-medium text-sm">
            EXPERT PROFILE
          </h5>
          <div className="grid gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12 py-4">
            <h2 className="text-4xl font-bold text-black">
              Our dedicated Team<br /> Members
            </h2>
            <p className="text-lg text-[#687799]">
              Ever find yourself starting at your computer screen a good consulting salon to come to mind? Oftentimes.
            </p>
          </div>
        </div>

        <div className="boxs gap-7 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-10">
          {/* Team Member 1 */}
          <div className="cursor-pointer hover:relative hover:top-[-10px] transition-all duration-300">
            <div className="box relative">
              <div className="img_size w-full h-[400px] rounded-[10px]">
                <Image 
                  className="w-full h-full rounded-[10px] object-cover"
                  src={t_1}
                  alt="team1"
                />
              </div>
              <div className="top_title absolute top-5 left-5">
                <a href="#" className="text-[25px] font-bold text-[#fff]">
                  Brooklyn simmons
                </a>
                <p className="text-[16px] relative text-[#fff]">Finance Advisor</p>
              </div>
              <div className="soc_icon absolute bottom-5 left-5">
                <ul className="bg-[#0045CE] px-3 py-3 flex flex-row justify-between rounded-[30px]">
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="cursor-pointer hover:relative hover:top-[-10px] transition-all duration-300">
            <div className="box relative">
              <div className="img_size w-full h-[400px] rounded-[10px]">
                <Image 
                  className="w-full h-full rounded-[10px] object-cover"
                  src={t_2}
                  alt="team2"
                />
              </div>
              <div className="top_title absolute top-5 left-5">
                <a href="#" className="text-[25px] font-bold text-[#fff]">
                  Smrithi simmons
                </a>
                <p className="text-[16px] relative text-[#fff]">Finance Analyst</p>
              </div>
              <div className="soc_icon absolute bottom-5 left-5">
                <ul className="bg-[#0045CE] px-3 py-3 flex flex-row justify-between rounded-[30px]">
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="cursor-pointer hover:relative hover:top-[-10px] transition-all duration-300">
            <div className="box relative">
              <div className="img_size w-full h-[400px] rounded-[10px]">
                <Image 
                  className="w-full h-full rounded-[10px] object-cover"
                  src={t_3}
                  alt="team3"
                />
              </div>
              <div className="top_title absolute top-5 left-5">
                <a href="#" className="text-[25px] font-bold text-[#fff]">
                  Kathi Synol
                </a>
                <p className="text-[16px] relative text-[#fff]">Data Analyst</p>
              </div>
              <div className="soc_icon absolute bottom-5 left-5">
                <ul className="bg-[#0045CE] px-3 py-3 flex flex-row justify-between rounded-[30px]">
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="cursor-pointer hover:relative hover:top-[-10px] transition-all duration-300">
            <div className="box relative">
              <div className="img_size w-full h-[400px] rounded-[10px]">
                <Image 
                  className="w-full h-full rounded-[10px] object-cover"
                  src={t_4}
                  alt="team4"
                />
              </div>
              <div className="top_title absolute top-5 left-5">
                <a href="#" className="text-[25px] font-bold text-[#fff]">
                  Rachel Sigar
                </a>
                <p className="text-[16px] relative text-[#fff]">Finance Manager</p>
              </div>
              <div className="soc_icon absolute bottom-5 left-5">
                <ul className="bg-[#0045CE] px-3 py-3 flex flex-row justify-between rounded-[30px]">
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaTwitter />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="text-white text-[20px]">
                      <FaFacebookF />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;