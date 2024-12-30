import { useState } from "react";
import { FaTimes, FaPhoneAlt, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiSettings } from "react-icons/fi"; // Icon for toggling colors
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img1 from "../../assets/faheem3.jpg";
import img2 from "../../assets/c4683321-56a1-4db2-b332-52bc75e21518-removebg-preview.png";
import { CiSaveDown1 } from "react-icons/ci";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-orange-400");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleColorPicker = () => {
    setColorPickerOpen(!colorPickerOpen);
  };

  const changeBackgroundColor = (colorClass) => {
    setBackgroundColor(colorClass);
    setColorPickerOpen(false); // Close the color picker
  };

  const [text] = useTypewriter({
    words: ["Professional Coder", "Full Stack Developer", "UI UX Designer", "App Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 15,
    delaySpeed: 2000,
  });

  const colors = [
    { name: "Orange", class: "bg-orange-400" },
    { name: "Blue", class: "bg-blue-400" },
    { name: "Green", class: "bg-green-400" },
    { name: "Purple", class: "bg-purple-400" },
  ];

  return (
    <div className={`h-screen w-full font-sans ${backgroundColor}`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-24 bg-transparent  flex justify-center gap-[65%] items-center px-4 py-3 z-50 shadow-sm">

        <div className="text-2xl font-bold text-black">
          <img src={img2} alt="" className="h-28" />
        </div>
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-black text-xl" />
          <div className="text-black text-lg font-medium">03057874388</div>
          <div
            className={`text-3xl cursor-pointer ${menuOpen ? "text-white" : "text-black"}`}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <div className="space-y-1">
                <div className="w-6 h-1 bg-black"></div>
                <div className="w-6 h-1 bg-black"></div>
                <div className="w-6 h-1 bg-black"></div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Color Picker Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <FiSettings
          className="text-4xl text-white bg-black p-2 rounded-full cursor-pointer hover:text-orange-400"
          onClick={toggleColorPicker}
        />
        {colorPickerOpen && (
          <div className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg space-y-2">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`${color.class} w-10 h-10 rounded-full cursor-pointer`}
                onClick={() => changeBackgroundColor(color.class)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all ${
          menuOpen
            ? "bg-black text-white flex flex-col items-center justify-center space-y-6"
            : "hidden"
        }`}
      >
        {["Home", "About", "What I Do", "Portfolio", "FAQ", "Client Speak", "Contact Me"].map(
          (item, index) => (
            <div key={index} className="text-2xl cursor-pointer hover:text-orange-400">
              {item}
            </div>
          )
        )}
        <div className="flex space-x-6 text-3xl mt-4">
          <FaTwitter className="cursor-pointer hover:text-orange-400" />
          <FaInstagram className="cursor-pointer hover:text-orange-400" />
          <FaWhatsapp className="cursor-pointer hover:text-orange-400" />
        </div>
      </div>

      {/* Hero Section */}
      <div
        className={`flex flex-col lg:flex-row items-center justify-around h-full space-x-8 ${
          menuOpen ? "hidden" : ""
        }`}
      >
        {/* Left Section */}
        <div className="flex flex-col pl-20 text-center lg:text-left items-center lg:items-start pt-14 space-y-6">
          <h1 className="text-5xl flex gap-3 text-white animate__animated animate__fadeIn animate__delay-1s">
            HI, I'M a <p className="text-black font-semibold">Faheem Malik</p>
          </h1>
          <div
            className="text-6xl font-bold text-black typing-effect"
            style={{
              display: "inline-flex",
              alignItems: "left",
              justifyContent: "left",
              width: "22ch", // Adjust width to fit longest text
            }}
          >
            <span>{text}</span>
            <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#000" />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <button className="btn text-white bg-black p-3 px-10 text-xl rounded">
              View my works
            </button>
            <a
              href=""
              className="text-2xl font-semibold text-center border-b-2 border-black flex items-center justify-center gap-2"
            >
              Contact me <CiSaveDown1 className="mt-2" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[380px] h-[380px] rounded-full mt-14 border-8 border-white overflow-hidden">
          <img src={img1} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
