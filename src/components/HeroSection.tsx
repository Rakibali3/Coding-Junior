import React from "react";
import { RiBankFill } from "react-icons/ri";
import { BsBuildingFillCheck } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src="https://d.ibtimes.co.uk/en/full/1404867/apple-imac-27-inch-5k-retina-display.jpg" // Replace with your image URL
            alt="Coding Illustration"
            className="w-full md:w-[500px]"
          />
        </div>
        {/* Text and Training Cards Section */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
            Where The World <br />
            Learns To Code
          </h1>

          {/* Training Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-blue-500 rounded-lg p-3 text-center w-full md:w-56 shadow-lg flex flex-col justify-center items-center">
              <RiBankFill size={40} className="text-blue-500" />
              <h2 className="text-base font-semibold text-blue-600">
                Campus Training
              </h2>
              <p className="text-xs text-gray-600">
                Designed for college students with a focus on xyz, xyz, xyz
                Lorem ipsum.
              </p>
              <button className="mt-3 border bg-blue-600 text-white rounded-lg px-4 py-1">
                Explore &gt;
              </button>
            </div>
            <div className="border-2 border-blue-500 rounded-lg p-3 text-center w-full md:w-56 shadow-lg flex flex-col justify-center items-center">
              <BsBuildingFillCheck size={40} className="text-blue-500" />
              <h2 className="text-base font-semibold text-blue-600">
                Professional Training
              </h2>
              <p className="text-xs text-gray-600">
                Designed for college students with a focus on xyz, xyz, xyz
                Lorem ipsum.
              </p>
              <button className="mt-3 border bg-blue-600 text-white rounded-lg px-4 py-1">
                Explore &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 flex-wrap mt-8">
        <div className="px-8 py-1 border-blue-500 flex items-center justify-center gap-4 rounded-lg border-2 text-lg md:w-auto">
          <MdAttachEmail size={30} />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-blue-500">50+</p>
            <p className="text-blue-500">Cities</p>
          </div>
        </div>
        <div className="px-8 py-1 border-blue-500 flex items-center justify-center gap-4 rounded-lg border-2 text-lg  md:w-auto">
          <MdAttachEmail size={30} />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-blue-500">80+</p>
            <p className="text-blue-500">Modules</p>
          </div>
        </div>
        <div className="px-8 py-1 border-blue-500 flex items-center justify-center gap-4 rounded-lg border-2 text-lg  md:w-auto">
          <MdAttachEmail size={30} />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-blue-500">10K+</p>
            <p className="text-blue-500">Students</p>
          </div>
        </div>
        <div className="px-8 py-1 border-blue-500 flex items-center justify-center gap-4 rounded-lg border-2 text-lg  md:w-auto">
          <MdAttachEmail size={30} />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-blue-500">100+</p>
            <p className="text-blue-500">Institutes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
