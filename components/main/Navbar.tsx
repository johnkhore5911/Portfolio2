
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';
import { FiMenu, FiX } from 'react-icons/fi'; // For hamburger and close icons

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10 " >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] md:block text-gray-100">
            Adrita Bhattacharjee
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex w-[350px] h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          {isMobileMenuOpen ? (
            <FiX
              className="text-gray-300 text-3xl cursor-pointer"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            />
          ) : (
            <FiMenu
              className="text-gray-300 text-3xl cursor-pointer"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            />
          )}
        </div>

        {/* Social Icons */}
        {/* <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <Image
            src={social.src}
            alt={social.name}
            key={social.name}
            width={24}
            height={24}
          />
        ))}
      </div> */}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-[#0300145e] text-gray-200 px-5 py-4">
          <div className="flex flex-col space-y-4">
            <a href="#about-me" className="cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              About me
            </a>
            <a href="#skills" className="cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#projects" className="cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </a>
            <div className="flex flex-row gap-5">
        {Socials.map((social) => (
          <Image
            src={social.src}
            alt={social.name}
            key={social.name}
            width={24}
            height={24}
          />
        ))}
      </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
