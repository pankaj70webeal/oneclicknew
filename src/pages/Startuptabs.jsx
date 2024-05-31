import { useState } from "react";
import logo from "../images/Ellipse 25 (1).png";
import Product from "../components/product/Product";
import Award from "../components/award/Award";
import Abount from "../components/Abount";
import Review from "../components/Review";
import { useNavigate } from "react-router-dom";

function Startuptabs() {
  const [activeLink, setActiveLink] = useState("About US");
  const navigate = useNavigate();
  const handleinquiry = () => {
    navigate("/statupinquiryfollow");
    console.log("hello");
  };
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="card mt-16">
          <div className="card-body w-full lg:w-[1076px] border mx-auto shadow-lg rounded-md h-auto lg:h-[322px] relative">
            <div className="row flex flex-col lg:flex-row justify-between mx-4 lg:mx-10 mt-8 space-y-4 lg:space-y-0">
              <div className="flex space-x-3">
                <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
                <div className="mt-3">
                  <h1 className="font-semibold text-3xl">
                    WebEarl Technology Pvt Ltd
                  </h1>
                  <p className="font-extralight text-xl">Cradle, EDII</p>
                </div>
              </div>
              <div className="rating lg:self-center">30 Review</div>
            </div>
            <div className="button mx-4 lg:mx-10 mt-10 lg:mt-20 flex flex-wrap justify-around space-y-4 lg:space-y-0 lg:space-x-3">
              <button className="loginbutton shadow-md w-full lg:w-[204px] h-[52px] font-normal gradient-bg rounded-xl text-white text-xl ">
                Call now
              </button>
              <button className="loginbutton shadow-md w-full lg:w-[269px] h-[52px] font-normal gradient-bg rounded-xl text-white text-xl">
                Write a review
              </button>
              <button className="loginbutton shadow-md w-[62px] h-[52px] font-normal gradient-bg rounded-xl text-white text-xl ">
                Call now
              </button>
              <button className="loginbutton shadow-md w-[62px] h-[52px] font-normal gradient-bg rounded-xl text-white text-xl ">
                Call now
              </button>
              <button
                className="loginbutton shadow-md w-full lg:w-[269px] h-[52px] font-normal gradient-bg rounded-xl text-white text-xl cursor-pointer"
                onClick={handleinquiry}
              >
                My inquiry
              </button>
            </div>
            {/* <div className="absolute top-0 right-0 w-full lg:w-[1076px] h-full lg:h-[322px] border-r-4 border-b-4 border-green-500 rounded-lg"></div> */}
          </div>
        </div>
        <div className="component flex flex-wrap justify-center lg:justify-start space-x-40 mt-16 w-full lg:w-[1076px] mx-auto">
          <span
            onClick={() => setActiveLink("About US")}
            className={`cursor-pointer font-semibold text-base md:text-2xl ${
              activeLink === "About US" ? "text-green-500" : ""
            }`}
          >
            About US
            {/* {activeLink === "About US" && (
              <img src={victor} alt="" className="w-[100px]" />
            )} */}
          </span>
          <span
            onClick={() => setActiveLink("Review")}
            className={`cursor-pointer font-semibold text-base md:text-2xl ${
              activeLink === "Review" ? "text-green-500" : ""
            }`}
          >
            Review
            {/* {activeLink === "Review" && (
              <img src={victor} alt="" className="w-[100px]" />
            )} */}
          </span>
          <span
            onClick={() => setActiveLink("Product")}
            className={`cursor-pointer font-semibold text-base md:text-2xl ${
              activeLink === "Product" ? "text-green-500" : ""
            }`}
          >
            Product
            {/* {activeLink === "Product" && (
              <img src={victor} alt="" className="w-[100px] h-2" />
            )} */}
          </span>
          <span
            onClick={() => setActiveLink("Achievements & Certificate")}
            className={`cursor-pointer font-semibold text-base md:text-2xl ${
              activeLink === "Achievements & Certificate"
                ? "text-green-500"
                : ""
            }`}
          >
            Achievements & Certificate
            {/* {activeLink === "Achievements & Certificate" && (
              <img src={victor} alt="" className="w-[300px] h-2" />
            )} */}
          </span>
        </div>
        <div className="mt-10">
          {activeLink === "About US" ? (
            <Abount />
          ) : activeLink === "Review" ? (
            <Review />
          ) : activeLink === "Product" ? (
            <Product />
          ) : (
            <Award />
          )}
        </div>
      </div>
    </>
  );
}

export default Startuptabs;
