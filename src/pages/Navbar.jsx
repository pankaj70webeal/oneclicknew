import React, { useState } from "react";
import image1 from "../images/Group 610.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navigate = useNavigate();

  

  const handleprofile = () => {
    navigate("/myprofile");
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleHome2 = () => {
    navigate("/home2");
  };
  const handlechangepaasword=()=>{
    navigate("/change-password")
  }
  const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
  
    const handleLogin = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleDelete = () => {
      setIsDeleting(true);
      // Simulate API request or any async operation
      setTimeout(() => {
        setIsDeleting(false);
        setIsOpen(false);
        navigate('/login')
        console.log('Item deleted!');
      }, 1000); // Placeholder for async operation duration
    };
const handlecontactus=()=>{
  navigate("/contact-us")
}
  return (
    <nav className="h-24 flex justify-between items-center px-4 lg:px-28 border-b shadow-md">
      <img src={image1} alt="" className="w-40 h-20 cursor-pointer" onClick={handleHome} />
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
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-bold border-b lg:border-none" onClick={handleHome2}>
          Home
        </li>
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium border-b lg:border-none">
          Free listing
        </li>
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium border-b lg:border-none">
          Service
        </li>
        <li className="cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium border-b lg:border-none" onClick={handlecontactus}>
          Contact US
        </li>
        <li className="relative cursor-pointer py-2 lg:py-0 lg:px-4 text-center font-medium">
          <div onClick={toggleDropdown} className="flex items-center justify-center">
            Profile
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          {dropdownOpen && (
            <ul className="absolute right-0 w-40 bg-white border border-gray-200 shadow-lg mt-2 rounded-md">
              <li
                className="cursor-pointer py-2 px-4 text-center font-medium hover:bg-gray-100"
                onClick={handleprofile}
              >
                Profile
              </li>
              <li
                className="cursor-pointer py-2 px-4 text-center font-medium hover:bg-gray-100"
                onClick={handleLogin}
              >
                Logout
              </li>
              <li
                className="cursor-pointer py-2 px-4 text-center font-medium hover:bg-gray-400"
                onClick={handlechangepaasword}
              >
                Changepassword
              </li>
            </ul>
          )}
        </li>
      </ul>
      {isOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"></div>

          <div className="bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full mx-4">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.126 4h12.252c1.305 0 2.316-.684 2.803-1.684l3.402-6.895c.48-.975.451-2.152-.085-3.086A2.006 2.006 0 0 0 21.513 6H2.487a2.006 2.006 0 0 0-1.917 2.336l3.402 6.895c.48 1.975 1.498 3.161 2.803 3.161z"
                    />
                  </svg>
                </div>

                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Logout
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to Logout this Oneclick? 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-center">
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`${
                  isDeleting ? 'opacity-50 cursor-not-allowed' : ''
                } w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:mr-3 sm:text-sm`}
              >
                {isDeleting ? 'Logouting...' : 'Yes'}
              </button>
              <button
                onClick={closeModal}
                disabled={isDeleting}
                className="mt-3 w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:text-sm"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
