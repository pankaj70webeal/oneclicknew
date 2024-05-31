// import React from "react";
import imag1 from "../images/Ellipse 16.png";
import imag4 from "../images/Rectangle 142.png";
import imag5 from "../images/User Image.png";
import imag6 from "../images/Group 392.png";
import imag7 from "../images/Group 579.png";
import image8 from "../images/Group 767.png";
import Sliderjoin from "../components/Sliderjoin";
import Justjoin from "../components/Justjoin";
import News from "../components/News";
import pankaj from "../images/pankaj.png";
import pankaj2 from "../images/pankaj2.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ellipsis-vertical } from '@fortawesome/free-solid-svg-icons';
import profile from "../images/more-vertical.png";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  // console.log(imag1);
  const navigate = useNavigate("");
  const handleprofile = () => {
    navigate("/myprofile");
  };
  const items = [
    { img: imag1, name: "Agriculture" },
    { img: imag1, name: "Apparel" },
    { img: imag1, name: "Automobiles & Two wheelers" },
    { img: imag1, name: "Baby care" },
    { img: imag1, name: "Beauty & Personal care" },
    { img: imag1, name: "Book" },
    { img: imag1, name: "Chemicals" },
    { img: imag1, name: "Construction & Real estate" },
    { img: imag1, name: "Electrical equipement & supplies" },
    { img: imag1, name: "Electronics" },
    { img: imag1, name: "Energy" },
    { img: imag1, name: "Electrical equipement & supplies" },
    { img: imag1, name: "Electronics" },
    { img: imag1, name: "Energy" },
    { img: imag1, name: "Electrical equipement & supplies" },
    { img: imag1, name: "Electronics" },
    { img: imag1, name: "Electrical equipement & supplies" },
    { img: imag1, name: "Electronics" },
    { img: imag1, name: "Electronics" },
    { img: imag1, name: "Energy" },
  ];
  const data = [
    { image: imag6, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj2, name: "Restrurent", subname: "168 Restaurent" },
    { image: imag6, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj2, name: "Restrurent", subname: "168 Restaurent" },
    { image: imag6, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj2, name: "Restrurent", subname: "168 Restaurent" },
    { image: imag6, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj, name: "Restrurent", subname: "168 Restaurent" },
    { image: pankaj2, name: "Restrurent", subname: "168 Restaurent" },
  ];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesPerRow: 2,
    speed: 500,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 1,
          rows: 1,
        },
      },
    ],
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <div className="container  mt-14 ">
        <div className="mx-16">
          <div className="lg:flex ">
          <div className="sidebar md:w-[343px] sm:w-full mb-10 lg:mb-0 lg:h-[1741px] border border-gray-300 shadow-2xl rounded-md overflow-hidden">
            <div className="flex justify-between items-center p-4 lg:hidden">
              <h2 className="text-xl font-semibold">Categories</h2>
              <button
                onClick={toggleSidebar}
                className="text-xl font-semibold focus:outline-none"
              >
                ☰
              </button>
            </div>
            <div
              className={`lg:block ${isSidebarOpen ? "block" : "hidden"}`}
            >
              <div className="search flex justify-center mt-11">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[301px] h-[40px] border border-gray-300 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md mx-4"
                />
              </div>
              <div className="category mt-7">
                {items.map((e, index) => (
                  <div
                    key={index}
                    className="item ml-5 mb-[35px] flex items-center"
                  >
                    <img src={e.img} alt={e.name} />
                    <p className="pl-4 text-sm">{e.name}</p>
                  </div>
                ))}
              </div>
              <div className="download mt-7">
                <div className="submit flex justify-center">
                  <button className="loginbutton shadow-md w-[199px] h-[56.65px] font-normal gradient-bg rounded-full">
                    + Post a Free Ad
                  </button>
                </div>
                <div className="submit flex justify-center mt-3">
                  <button className="loginbutton shadow-md w-[199px] h-[56.65px] font-normal gradient-bg rounded-full">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
            {/* my full info  */}
            <div className="profile md:ml-2 ">
              <div className="topcontent md:flex justify-center max-w-[811px] h-[241px] ">
                <div className="productimage mb-2 md:mb-0">
                  <img src={imag4} alt="" />
                </div>
                <div className="profile md:mt-5 md:ml-2 w-[223px] h-[162px] border shadow-lg rounded-lg ">
                  {/* <img src={imag5} alt="" /> */}
                  <div className=" flex justify-between items-center mx-3 mt-4 ">
                    <div className="1">
                      <img
                        src={imag5}
                        alt=""
                        className="w-[50px] h-[48.35px]"
                      /> 
                    </div>
                    <div className="2 ">
                      <h1 className="font-medium text-2xl">Maria</h1>
                      <p className="font-light text-xs">98 Deals</p>
                    </div>
                    <div className="3">
                      {/* <FontAwesomeIcon icon="fa-regular fa-ellipsis-vertical" /> */}
                      <img src={profile} alt="" className="w-[24px] h-[24px]" />
                    </div>
                  </div>
                  <div className="div flex justify-center items-center mt-8">
                    <button
                      className="profilebutton w-[150px] h-[46px] rounded-lg"
                      onClick={handleprofile}
                    >
                      Setting
                    </button>
                  </div>
                </div>
              </div>
              <div className="middlecontent max-w-[811px] h-[357px] md:mt-8 mt-28 ml-3 border shadow-xl rounded-md ">
                <div className="mt-20 ">
                  <Slider {...settings}>
                    {data.map((item, index) => (
                      <div key={index}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[76.3px] h-[58.54px]"
                        />
                        <p className="font-semibold text-sm">{item.name}</p>
                        <p className="font-light text-xs">{item.subname}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="buttomcontent max-w-[807px] max-h-[1083px] ml-3 mt-10 shadow-lg rounded-xl">
                <img src={imag7} alt="" />
              </div>
            </div>
          </div>
          <div className="inquirynow max-h-[555px] max-w-[1150px]  border border-gray-300 shadow-lg rounded-md mt-16 flex justify-center items-center">
            <div className="contenttext ">
              <h1 className=" max-w-[495px] h-[80px] text-5xl font-semibold flex justify-center  ">
                Customer Service
              </h1>
              <div className="text-base flex justify-center items-center mt-6 font-medium">
                <h6 className="">
                  <span className="ml-20">we are on misssion to provide</span>{" "}
                  <br />
                  good Customer service to the people at very low price
                </h6>
              </div>
              <div className="flex justify-center items-center mt-10">
                {" "}
                <img src={image8} alt="" className="" />
              </div>
            </div>
          </div>

          {/* News  */}
          <div className="news mt-20 mb-10">
            <News />
          </div>
          {/* just join  */}
          <div className="justjoin">
            <Justjoin />
          </div>
          {/* slidercard  */}
          <div className="slider">
            <Sliderjoin />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
