import  { useState } from "react";
import { FaCog } from "react-icons/fa"; // Importing the settings icon

function About() {
  const [themeColor, setThemeColor] = useState("orange"); // State to track the theme color
  const [showColorOptions, setShowColorOptions] = useState(false);

  const handleColorChange = (color) => {
    setThemeColor(color); // Update theme color
    setShowColorOptions(false); // Hide color options after selection
  };

  return (
    <div className="h-[650px] flex flex-col items-center justify-between font-sans relative">
      {/* Settings Icon */}
      <div className="absolute top-4 right-4">
        <FaCog
          className="text-3xl cursor-pointer text-gray-600"
          onClick={() => setShowColorOptions((prev) => !prev)}
        />
        {showColorOptions && (
          <div className="absolute right-0 mt-2 flex space-x-4 bg-white p-2 rounded-lg shadow-lg">
            <div
              className="w-8 h-8 bg-orange-400 rounded-full cursor-pointer"
              onClick={() => handleColorChange("orange")}
            ></div>
            <div
              className="w-8 h-8 bg-blue-400 rounded-full cursor-pointer"
              onClick={() => handleColorChange("blue")}
            ></div>
            <div
              className="w-8 h-8 bg-green-400 rounded-full cursor-pointer"
              onClick={() => handleColorChange("green")}
            ></div>
            <div
              className="w-8 h-8 bg-purple-400 rounded-full cursor-pointer"
              onClick={() => handleColorChange("purple")}
            ></div>
          </div>
        )}
      </div>

      {/* About Me Section */}
      <div className="w-full justify-center items-center h-32 flex-col flex text-center text-black py-10 mt-10">
        <div
          className={`w-28 h-28 rounded-full flex justify-center items-center ${
            themeColor === "orange" ? "bg-orange-500" : ""
          } ${themeColor === "blue" ? "bg-blue-500" : ""} ${
            themeColor === "green" ? "bg-green-500" : ""
          } ${themeColor === "purple" ? "bg-purple-500" : ""}`}
        >
          <h1 className="font-bold text-xl text-white h-10 flex items-center justify-center">
            About Me
          </h1>
        </div>
        <p className="text-4xl mt-2 font-semibold">Know Me More</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-center px-10 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-16">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-6 text-black text-center lg:text-left">
          <h2 className="text-4xl font-bold">
            Hi, I'm{" "}
            <span
              className={`font-bold border-b-2 border-black ${
                themeColor === "orange" ? "text-orange-500" : ""
              } ${themeColor === "blue" ? "text-blue-500" : ""} ${
                themeColor === "green" ? "text-green-500" : ""
              } ${themeColor === "purple" ? "text-purple-500" : ""}`}
            >
              Faheem Malik
            </span>
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a designer & developer with a passion for web design. I enjoy
            developing simple, clean, and slick websites that provide real value
            to the end user. Thousands of clients have procured exceptional
            results while working with me. Delivering work within time and
            budget which meets client’s requirements is our motto.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div
            className={`text-black w-24 h-24 rounded-full flex items-center justify-center text-9xl font-bold shadow-lg pb-7 ${
              themeColor === "orange" ? "bg-orange-500" : ""
            } ${themeColor === "blue" ? "bg-blue-500" : ""} ${
              themeColor === "green" ? "bg-green-500" : ""
            } ${themeColor === "purple" ? "bg-purple-500" : ""}`}
          >
            3
          </div>
          <span className="text-4xl font-semibold flex gap-3 pb-14">
            Years of <p className="font-bold pb-10">Experience</p>
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full py-4 mb-10">
        <div className="flex flex-col lg:flex-row justify-evenly text-center lg:text-left text-black text-lg font-medium px-4 lg:px-20 gap-20">
          <div>
            <span className="font-bold">Name:</span> Faheem Malik
          </div>
          <div>
            <span className="font-bold">Email:</span>
            <a href="" className="border-b-[1px] border-black">
              {" "}
              faheemmalik7874@gmail.com
            </a>
          </div>
          <div>
            <span className="font-bold">Date of Birth:</span> 11 November, 2002
          </div>
          <div>
            <span className="font-bold">From:</span>{" "}
            <span
              className={`${
                themeColor === "orange" ? "text-orange-500" : ""
              } ${themeColor === "blue" ? "text-blue-500" : ""} ${
                themeColor === "green" ? "text-green-500" : ""
              } ${themeColor === "purple" ? "text-purple-500" : ""}`}
            >
              Pakistan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
