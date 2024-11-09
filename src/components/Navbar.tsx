import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative">
      <div className="flex items-center space-x-2 text-xl font-bold">
        <img
          src="https://i.pinimg.com/originals/33/85/ba/3385ba649152c101df1a13b21241c3bd.png"
          alt="Logo"
          className="h-8 w-8"
        />
        <span>CODING PRO</span>
      </div>

      <ul className="hidden md:flex flex-1 justify-center space-x-10">
        <li>
          <a href="#" className="hover:underline">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Virtual Labs
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Programs
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            For Colleges
          </a>
        </li>
      </ul>

    
      <div className="hidden md:flex space-x-4">
        <button className="text-blue-500 border-blue-500 px-5 py-1 rounded-lg font-bold border-2">
          Log in
        </button>
        <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 px-8 py-[7px]">
          Register
        </button>
      </div>

      <button
        className="md:hidden flex items-center"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Virtual Labs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For Colleges
              </a>
            </li>
            <li>
              <button className="text-blue-500 border-blue-500 px-5 py-1 rounded-lg font-bold border-2 w-full">
                Log in
              </button>
            </li>
            <li>
              <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 px-8 py-[7px] w-full">
                Register
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
