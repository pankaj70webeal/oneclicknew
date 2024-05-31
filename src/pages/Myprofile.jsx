import { useState } from "react";
import Myfullinfo from "../components/Myfullinfo";
import StartUp from "../components/StartUp";
import Myinquiry from "../components/Myinquiry";
import frame from "../images/Frame 38 (1).png";
import photo from "../images/Ellipse 53 (1).png";
// import victor from "../images/Vector 20.png";
import { useNavigate } from "react-router-dom";

function Myprofile() {
  const [activeLink, setActiveLink] = useState("My Profile");
  const navigate = useNavigate("");
  const handleaddstartup = () => {
    navigate("/addstartup");
  };

  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="profilephoto mt-20 mb-32 relative">
        <img src={frame} alt="" className="w-full" />
        <img
          src={photo}
          alt=""
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute top-10 left-10 md:left-20"
        />
        <div className="ml-28 md:ml-80 mt-24 md:mt-10 flex flex-col md:flex-row justify-between items-center">
          <div className="name text-center md:text-left">
            <h1 className="font-semibold text-xl md:text-2xl">Profile</h1>
            <h1 className="font-medium text-lg">John Aeobasan</h1>
          </div>
          {activeLink === "startup" && (
            <div className="submit mt-4 md:mt-0">
              <button
                className="loginbutton shadow-md w-[150px] md:w-[247px] h-[40px] md:h-[58.41px] font-normal gradient-bg rounded-full font-semibold"
                onClick={handleaddstartup}
              >
                + Add Start-up
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="component flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 lg:space-x-44 text-center md:text-left">
        <span
          onClick={() => setActiveLink("My Profile")}
          className={`cursor-pointer font-semibold text-base md:text-2xl ${
            activeLink === "My Profile" ? "text-blue-500" : ""
          }`}
        >
          Basic Information
        </span>
        <span
          onClick={() => setActiveLink("startup")}
          className={`cursor-pointer font-semibold text-base md:text-2xl ${
            activeLink === "startup" ? "text-blue-500" : ""
          }`}
        >
          Start-ups
        </span>
        <span
          onClick={() => setActiveLink("My Inquiry")}
          className={`cursor-pointer font-semibold text-base md:text-2xl ${
            activeLink === "My Inquiry" ? "text-blue-500" : ""
          }`}
        >
          My Inquiry
        </span>
      </div>
      <div className="mt-10">
        {activeLink === "My Profile" ? (
          <Myfullinfo />
        ) : activeLink === "startup" ? (
          <StartUp />
        ) : (
          <Myinquiry />
        )}
      </div>
    </div>
  );
}

export default Myprofile;
