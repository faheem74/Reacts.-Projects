// import { useState } from "react";
// import { FaSearch, FaShoppingBag, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
// import image1 from "../../assets/732229 1.png";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
//       <nav className="flex justify-between items-center px-8  bg-gray-300">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img src={image1} alt="Logo" className="h-16 w-16 mr-4" />
//         </div>

//         {/* Navigation Links for Desktop */}
//         <div className="hidden md:flex space-x-8 text-lg gap-10">
//           <a href="#" className="hover:text-gray-400 text-black">
//             New
//           </a>
//           <a href="#" className="hover:text-gray-400 text-black">
//             Men
//           </a>
//           <a href="#" className="hover:text-gray-400 text-black">
//             Women
//           </a>
//           <a href="#" className="hover:text-gray-400 text-black">
//             Jordan
//           </a>
//         </div>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-6">
//           {/* Icons for Desktop */}
//           <div className="hidden md:flex items-center space-x-6">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="px-4 py-2 w-64 rounded-full text-black focus:outline-none shadow-gray-500 shadow-sm"
//               />
//               <FaSearch className="absolute top-2 right-4 text-gray-500 text-xl" />
//             </div>
//             <FaRegHeart className="text-black text-2xl" />
//             <FaShoppingBag className="text-2xl text-black" />
//           </div>

//           {/* Icons for Mobile */}
//           {!isMenuOpen && (
//             <div className="flex md:hidden space-x-4">
//               <FaShoppingBag className="text-2xl text-black md:none" />
//               <FaRegHeart className="text-black text-2xl" />
//             </div>
//           )}

//           {/* Hamburger Menu Icon for Mobile */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-2xl text-black focus:outline-none md:hidden"
//           >
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-300 px-8 py-4 space-y-4">
//           {/* Navigation Links */}
//           <div className="flex flex-col space-y-4 text-lg">
//             <a href="#" className="hover:text-gray-400 text-black">
//               New
//             </a>
//             <a href="#" className="hover:text-gray-400 text-black">
//               Men
//             </a>
//             <a href="#" className="hover:text-gray-400 text-black">
//               Women
//             </a>
//             <a href="#" className="hover:text-gray-400 text-black">
//               Jordan
//             </a>
//           </div>

//           {/* Search Bar */}
//           <div className="relative mt-4">
//             <input
//               type="text"
//               placeholder="Search"
//               className="px-4 py-2 w-full rounded-full text-black focus:outline-none shadow-gray-500 shadow-sm"
//             />
//             <FaSearch className="absolute top-2 right-4 text-gray-500 text-xl" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
