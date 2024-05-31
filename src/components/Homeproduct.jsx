import React from "react";
import shoes from "../images/Rectangle 71.png";
import shoe from "../images/Group 760.png";
import photo from "../images/Rectangle 320.png";
import { useNavigate } from "react-router-dom";

function Homeproduct() {
  const navigate=useNavigate()
  const handlestartup=()=>{
    navigate("/homestartup")
  }
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="margin mx-14">
          <div className="mt-10 mx-auto flex flex-wrap lg:flex-nowrap lg:space-x-5">
            <div className="lestcontent w-full lg:w-auto">
              <div className="shoes w-full md:w-[460px] h-[448px] border rounded-lg shadow-lg flex justify-around items-center">
                <img src={shoes} alt="" className="h-[225.15px]" />
              </div>
              <div className="shoes w-full md:w-[460px] h-[92px] border rounded-lg shadow-lg flex justify-around items-center mt-10">
                <img src={shoe} alt="" className="h-[53.44px]" />
                <img src={shoe} alt="" className="h-[53.44px]" />
                <img src={shoe} alt="" className="h-[53.44px]" />
                <img src={shoe} alt="" className="h-[53.44px]" />
              </div>
              <div className="startup w-full md:w-[462px] h-auto lg:h-[700px] mt-10 px-8 py-10 border rounded-md shadow-lg">
                <div className="img">
                  <img src={photo} alt="" className="w-full h-[172px] object-cover" />
                </div>
                <div className="submit mt-10">
                  <button className="loginbutton shadow-md w-full h-[50px] font-normal gradient-bg rounded-md font-semibold text-white">
                    Follow
                  </button>
                </div>
                <div className="sport mt-10">
                  <div className="rating flex justify-between">
                    <h1 className="text-2xl font-semibold">Tab Sport</h1>
                    <h1 className="text-2xl font-semibold">4.8</h1>
                  </div>
                  <p className="text-xl font-normal text-gray-400 py-5">
                    218/B, Near Mala sheri Mumbai, Maharastra - 259632
                  </p>
                  <h1 className="font-semibold text-xl text-gray-400">
                    Open Now :
                  </h1>
                  <p className="text-xl font-normal text-gray-400">
                    Mon - Sun :- 10:30 am - 9:30 pm
                  </p>
                  <div className="button mt-10">
                    <button className="loginbutton shadow-md w-full h-[60px] font-semibold text-xl bg-none border border-green-600 rounded-br-lg" onClick={handlestartup}>
                      About START-UP
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightcontent w-full lg:w-auto">
              <div className="heading">
                <h1 className="w-full lg:w-[468px] font-semibold text-2xl">
                  Round toe leather loafer shoe(Black)
                </h1>
                <p>Add to my wishlist</p>
              </div>
              <div className="color mt-10">
                <div className="top flex flex-wrap space-x-14">
                  <h1 className="text-xl font-semibold text-gray-400">
                    Occasion:{" "}
                    <span className="text-xl font-semibold text-black">
                      Sports
                    </span>
                  </h1>
                  <h1 className="text-xl font-semibold text-gray-400">
                    Color:{" "}
                    <span className="text-xl font-semibold text-black">
                      Red
                    </span>
                  </h1>
                </div>
                <div className="top flex flex-wrap space-x-14 mt-3">
                  <h1 className="text-xl font-semibold text-gray-400">
                    Size:{" "}
                    <span className="text-xl font-semibold text-black">12</span>
                  </h1>
                  <h1 className="text-xl font-semibold text-gray-400">
                    Type:{" "}
                    <span className="text-xl font-semibold text-black">
                      Running Shoes, Womens Shoes
                    </span>
                  </h1>
                </div>
                <div className="button flex justify-between mt-10">
                  <h1 className="font-semibold text-xl">$58.30</h1>
                  <button className="loginbutton shadow-md w-[222px] h-[55px] font-normal gradient-bg rounded-md font-semibold text-white">
                    Inquiry Now
                  </button>
                </div>
                <div className="description mt-8">
                  <h1 className="font-semibold text-xl pb-4">Description</h1>
                  <p className="text-xl font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat ipsum earum harum sunt aliquid excepturi eum assumenda quasi, expedita, soluta delectus? Libero culpa debitis unde magni quibusdam error alias praesentium laborum sunt recusandae porro modi maxime delectus deleniti sit, fugiat sint ad et odit voluptatibus perferendis laudantium consequuntur, exercitationem deserunt. Facere maxime delectus sint accusamus odit aspernatur, deserunt possimus necessitatibus asperiores eligendi officiis numquam neque, commodi molestias sed voluptate excepturi id quod doloremque velit nobis aperiam vero nesciunt! Quas blanditiis laudantium, sapiente quo tempore fugiat ipsa temporibus commodi molestiae earum maiores nobis consectetur sunt provident error aperiam alias aut.
                  </p>
                </div>
                <div className="specification mt-10">
                  <h1 className="text-2xl font-semibold">Specification</h1>
                  <div className="flex overflow-hidden w-full lg:w-[500px] h-auto lg:h-[378px] px-10 mt-5 justify-between border space-x-10 py-10 shadow-md rounded-md">
                    <div className="left">
                      <h1 className="text-lg text-gray-400 font-medium">Product Model</h1>
                      <h1 className="text-lg text-gray-400 font-medium">Manufacture details</h1>
                      <h1 className="text-lg text-gray-400 font-medium">Product weight</h1>
                      <h1 className="text-lg text-gray-400 font-medium">Brand</h1>
                      <h1 className="text-lg text-gray-400 font-medium">Size</h1>
                      <h1 className="text-lg text-gray-400 font-medium">Type</h1>
                      <h1 className="text-lg text-gray-400 font-medium">Color</h1>
                    </div>
                    <div className="right">
                      <h1 className="text-lg font-medium">Escaper Mesh</h1>
                      <h1 className="text-lg font-medium">48/B, Batahouse, malaseri Bhat-gandhinagar</h1>
                      <h1 className="text-lg font-medium">0.7190kg, 719gm</h1>
                      <h1 className="text-lg font-medium">Puma</h1>
                      <h1 className="text-lg font-medium">11</h1>
                      <h1 className="text-lg font-medium">Running shoes, womens shoes</h1>
                      <h1 className="text-lg font-medium">Navy</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homeproduct;
