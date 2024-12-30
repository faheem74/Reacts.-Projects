import {} from "react";
import { FaCode, FaMobileAlt, FaPalette, FaDesktop,  FaBullhorn } from "react-icons/fa";

function Nextdo() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans px-6 lg:px-20 py-16">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-center text-black mb-6">
        What I Do?
      </h1>

      {/* Subheading */}
      <p className="text-xl lg:text-2xl font-semibold text-center text-gray-700 mb-10">
        How I can help your next project
      </p>

      {/* Content Sections */}
      <div className="flex gap-[10%] justify-center flex-wrap">
        {/* Web Development Section */}
        <div className="flex flex-col items-center">
          <FaCode className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">Web Development</h2>
          <p className="text-gray-700 leading-6 w-72 text-center ">
            Building high-performance, secure, and scalable websites tailored to meet your business goals.
          </p>
    
        </div>

        {/* Full Stack Development Section */}
        <div className="flex flex-col items-center">
          <FaDesktop className="text-5xl text-purple-500 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">Full Stack Development</h2>
          <p className="text-gray-700 leading-6 w-72 text-center">
            Comprehensive development services for both frontend and backend solutions.
          </p>
        </div>

        {/* Python Development Section */}
        <div className="flex flex-col items-center">
          <FaCode className="text-5xl text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">Python</h2>
          <p className="text-gray-700 leading-6 w-72 text-center">
            Crafting efficient scripts and applications using Python for various use cases.
          </p>
        </div>
      </div>

      <div className="flex gap-[10%] justify-center flex-wrap mt-10">
        {/* App Development Section */}
        <div className="flex flex-col items-center">
          <FaMobileAlt className="text-5xl text-orange-500 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">App Development</h2>
          <p className="text-gray-700 leading-6 w-72 text-center">
            Creating intuitive and feature-rich mobile applications for iOS and Android platforms.
          </p>
        </div>

        {/* UI/UX Design Section */}
        <div className="flex flex-col items-center">
          <FaPalette className="text-5xl text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">UI/UX Design</h2>
          <p className="text-gray-700 leading-6 w-72 text-center">
            Designing seamless and user-friendly interfaces that enhance user experience.
          </p>
        </div>

        {/* Social Media Marketing Section */}
        <div className="flex flex-col items-center">
          <FaBullhorn className="text-5xl text-red-500 mb-4" />
          <h2 className="text-2xl font-bold text-black mb-2">Social Media Marketing</h2>
          <p className="text-gray-700 leading-6 w-72 text-center">
            Developing and executing effective social media strategies to grow your brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nextdo;
