import { useState } from "react";
import image from "../images/profileimage.png";
import image2 from "../images/Group 780.png";
import loction from "../images/map-pin.png";
import shoes from "../images/Frame 759.png";
// import { useState } from "react";

function Startupinquirychat() {
    const [showOtherContent, setShowOtherContent] = useState(false);
    const [viewChat, setViewChat] = useState(false);
  
    const handleViewChat = () => {
      setShowOtherContent(!showOtherContent);
      setViewChat(!viewChat);
    };
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="marginuser mt-10 ">
          <div className="box md:w-4/5 xl:w-[800px] mx-auto border px-10 shadow-xl">
            <div className="div flex justify-between  mt-5">
              <p className="font-light text-sm">Inquiry Date:- 01-02-2024</p>
              <p className="font-light text-sm">Inquiry Number:- 123456789</p>
            </div>
            <div className="title flex justify-between mt-5">
              <div className="logo flex space-x-3 items-center">
                <img src={image} alt="" className="w-[80px] h-[80px]" />
                <div className="name">
                  <h1 className="text-lg font-semibold">
                  John Aeobasan
                  </h1>
                  <p className="text-xs font-normal text-gray-400">
                  Contact No: 987-987-9876
                  </p>
                  <p className="text-xs font-normal text-gray-400">
                  Email ID: 123@gmail.com
                  </p>
                </div>
              </div>
              <div className="star mt-4">
                <img src={image2} alt="" className="w-[100px]" />
              </div>
            </div>
            <div className="loction">
              <div className="top flex justify-between mt-10">
                <div className="1 flex  space-x-2 items-center">
                  <img src={loction} alt="" className="w-[25px]" />
                  <p>Ahemdabad</p>
                </div>
                <div className="2 flex space-x-2 items-center">
                  <img src={loction} alt="" className="w-[25px]" />
                  <p>Gujarat</p>
                </div>
                <div className="3 flex space-x-2 items-center">
                  <img src={loction} alt="" className="w-[25px]" />
                  <p>India</p>
                </div>
              </div>
              <div className="center flex justify-between mt-4">
                <div className="1 flex space-x-2 items-center">
                  <img src={loction} alt="" className="w-[25px]" />
                  <p>Incubation center</p>
                </div>
                <div className="2">
                  <p>Centre for Advancing & Launching Enterprises (CrAdLE)</p>
                </div>
              </div>
            </div>
            <div className="product mt-8">
              <h1 className="font-semibold text-lg">Product Details</h1>
              <div className="detail flex justify-between">
                <div className="img">
                  <img src={shoes} alt="" className="w-[100px]" />
                </div>
                <div className="detail-2 ">
                  <h1 className="font-semibold">
                    Round toe leather loafer shoe(Black)
                  </h1>
                  <div className="div flex space-x-4">
                    <div className="div1">
                      <p className="text-xs text-gray-400">
                        Occasion
                        <span className="text-xs text-black">Sport</span>
                      </p>
                      <p className="text-xs text-gray-400">
                        Size<span className="text-xs text-black">12</span>
                      </p>
                    </div>
                    <div className="div3">
                      <p className="text-xs text-gray-400">
                        Color<span className="text-xs text-black">Red</span>
                      </p>
                      <p className="text-xs text-gray-400">
                        Type
                        <span className="text-xs text-black">
                          Running Shoes, Womenent Shoes
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="detail4">
                  <h1 className="font-semibold text-lg">$58.30</h1>
                  <p className="font-semibold text-xs">$60.30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
        <div className="marginuser mt-10 ">
          <div className="fixed bottom-10 right-10 md:w-4/5 xl:w-[800px] mx-auto flex justify-end">
            <div
              className="w-[350px] h-[50px] border rounded-md shadow-md flex items-center py-1 cursor-pointer hover:bg-gray-400"
              onClick={handleViewChat}
            >
              <img src={image} alt="" className="w-[40px] h-[40px] mx-3" />
              <h1 className="font-semibold">WebEarl Technology Pvt Ltd</h1>
            </div>
          </div>
        </div>
        {viewChat && (
          <div className="fixed bottom-24 right-10 md:w-4/5 xl:w-[800px] mx-auto flex justify-end">
            <div className="w-[350px] px-5 border rounded-md shadow-md flex items-center py-5 cursor-pointe">
              <p>This is the content to show above.</p>
            </div>

          </div>
        )}
      </div>
        </div>
      </div>
    </>
  )
}

export default Startupinquirychat
