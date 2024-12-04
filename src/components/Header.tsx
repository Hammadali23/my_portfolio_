"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="text-2xl font-bold hover:text-yellow-400 hover:scale-110 transition-all duration-300 ease-in-out  ">
          <Link href="/">My Portfolio</Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 absolute lg:static top-16 lg:top-auto left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center text-xl space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
            <li>
              <Link
                href="/"
                 className="text-white  relative hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white relative hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300 "
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="text-white relative hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300 "
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="text-white relative hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300 "
                onClick={handleLinkClick}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className="text-white relative hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300 "
                onClick={handleLinkClick}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white relative hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition duration-300 ease-in-out after:content-[''] after:block after:h-0.5 after:w-0 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
