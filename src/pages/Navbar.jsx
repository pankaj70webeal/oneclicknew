import React, { useState } from "react";
import image1 from "../images/Group 610.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate=useNavigate()
  const handlelogin =()=>{
    navigate("/login")
  }
  const handlehome=()=>{
    navigate("/")
  }
  const handlehome2=()=>{
    navigate("/home2")
  }
  return (
    <nav className="h-24 flex justify-between items-center px-4 lg:px-28 border-b shadow-md">
      <img src={image1} alt="" className="w-40 h-20" onClick={handlehome}/>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`text-base lg:flex justify-end lg:space-x-10 flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-bold border-b lg:border-none" onClick={handlehome2}>
          Home
        </li>
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium border-b lg:border-none">
          Free listing
        </li>
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium border-b lg:border-none">
          Service
        </li>
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium border-b lg:border-none">
          Contact US
        </li>
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium" onClick={handlelogin}>
          LogIn/Register
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
