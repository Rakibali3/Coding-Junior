import React from 'react';
import { FaArrowRight, FaPhoneAlt, FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 mt-7">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between">
        <div className="mb-6 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">Let's keep in touch!</h2>
          <p className="mb-4">Request a CodingPro Institute enquiry!</p>
          <form className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Institute name"
              className="p-2 rounded-l-md border-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-gradient-to-r from-blue-300 to-blue-500 p-2 rounded-r-md">
              <FaArrowRight size={25} />
            </button>
          </form>
          <p className="mb-1"><a href="#" className="hover:underline">Create Account</a></p>
          <p className="mb-4"><a href="#" className="hover:underline">Sign in</a></p>
          <p className="flex gap-2 items-center mb-2">
            <FaPhoneAlt />
            + 91 97973 59144
          </p>
          <p className="flex gap-2 items-center mb-2">
            <MdOutlineMail size={20} />
            codingjr.in@gmail.com
          </p>
          <p className="flex gap-2 items-center">
            <CiLocationOn size={20} />
            AIC-BHU, Varanasi, 421004
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-3/5 text-center lg:text-left items-center lg:items-start">
          <div className="mb-6 lg:mb-0 flex items-center lg:items-start flex-col">
            <h3 className="text-xl font-bold mb-2">Courses</h3>
            <ul className="flex items-center lg:items-start justify-center flex-col">
              <li className="mb-2"><a href="#" className="hover:underline">Campus Training Program</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Professional Training Program</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">B. Tech</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">B. Des.</a></li>
            </ul>
          </div>
          <div className="mb-6 lg:mb-0 flex items-center lg:items-start flex-col">
            <h3 className="text-xl font-bold mb-2">Company</h3>
            <ul className="flex items-center lg:items-start justify-center flex-col">
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Our Team</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div className="flex items-center lg:items-start flex-col">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#"><FaInstagram size={25} /></a>
              <a href="#"><FaFacebookSquare size={25} /></a>
              <a href="#"><FaLinkedin size={25} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
