"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

export const Navbar = (): React.ReactElement => {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container>
            <nav
                className={` sticky top-0 w-full h-21 flex items-center z-50 px-2 sm:px-6 lg:px-3 border-1 border-neutral-200 rounded-2xl transition-all duration-300 ${
                    isScrolled ? "bg-sky-50" : "bg-transparent"
                }`}
            >
{/* Logo Section */}
<div className="flex items-center">
    <Image
        src="/logo.png"
        alt="Logo"
        width={44}
        height={44}
        className="mr-3"
    />
    <a
        href="/#"
        className={`text-xl sm:text-2xl lg:text-3xl font-bold mr-7 transition-all duration-300 ${
            isScrolled 
            ? "bg-gradient-to-r from-blue-900 via-slate-900 to-sky-900 inline-block bg-clip-text" 
            : "text-white"
        }`}
    >
        IC Candle
    </a>
</div>

                {/* Navigation Links */}
<div className="hidden sm:flex space-x-4">
    <Link
        href="/features"
        className={`font-bold transition-all duration-300 ${
            isScrolled
                ? "text-neutral-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text"
                : "text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text"
        }`}
    >
        Features
    </Link>
    <Link
        href="/Pricing"
        className={`font-bold transition-all duration-300 ${
            isScrolled
                ? "text-neutral-500 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-900 hover:via-slate-900 hover:to-sky-600 bg-clip-text"
                : "text-white"
        }`}
    >
        Pricing
    </Link>
</div>
                {/* Button Section */}
<button
  className="group relative flex items-center px-10 py-3 rounded-full border border-neutral-200 bg-white cursor-pointer ml-auto hover:shadow-lg transition-all duration-500 ease-in-out overflow-hidden"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Background Animation */}
  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left z-0"></div>

  {/* "Try now" Button */}
<span
    className={`relative flex items-center justify-center px-3 text-lg transition-all duration-500 z-20 text-black ${
        isHovered ? "opacity-0 translate-x-[20px]" : "opacity-100 translate-x-0"
    }`}
>
    Try now
    <span
        className="absolute right-20 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-slate-700 to-sky-600 transition-transform duration-500 ease-in-out transform group-hover:translate-x-2"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-7 h-7"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
    </span>
    <span
        className={`absolute left-20 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-900 via-slate-900 to-sky-600 transition-transform duration-500 ease-in-out transform ${
            isHovered ? "translate-x-2 opacity-100" : "translate-x-0 opacity-0"
        }`}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-7 h-7"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
    </span>
</span>

  {/* "Sign in" Button */}
  <span
    className={`absolute block text-lg text-white transition-all duration-500 z-20 ${
      isHovered ? "opacity-100 translate-x-[10px]" : "opacity-0 translate-x-0"
    }`}
  >
    Sign in
  </span>
</button>
            </nav>
        </Container>
    );
};