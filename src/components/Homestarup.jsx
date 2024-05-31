import React from "react";
import photo from "../images/Rectangle 320.png";
import shoes from "../images/Rectangle 71.png";
import award from "../images/Rectangle 325.png";

function Homestarup() {
    const category = [
        {
          name: "Product1",
          price: 29.99,
          category: "Electronics",
          subcategory: "Mobile Phones",
        },
        {
          name: "Product 2",
          price: 49.99,
          category: "Home Appliances",
          subcategory: "Kitchen",
        },
        {
          name: "Product 3",
          price: 19.99,
          category: "Books",
          subcategory: "Fiction",
        },
      ];
  return (
    <>
      <div className="container">
        <div className="margin mx-14">
          <div className="display mt-10 lg:flex space-x-10 ">
            <div className="startup px-5  max-w-[462px]  h-[650px] border py-5 shadow-lg">
              <div className="img flex justify-center items-center">
                <img
                  src={photo}
                  alt=""
                  className="w-[90%] h-[100px] object-cover"
                />
              </div>
              <div className="submit mt-5 flex justify-center items-center">
                <button className="loginbutton shadow-md w-[50%] h-[35px] font-normal gradient-bg rounded-md font-semibold text-white">
                  Follow
                </button>
              </div>
              <div className="tabsport mt-5  ">
                <h1 className="font-semibold text-lg pb-1">Tab Sport</h1>
                <div className="left flex justify-between pb-2 ">
                  <h1 className="text-base font-normal text-gray-400">
                    Phone Number
                  </h1>
                  <h1 className="text-base font-normal text-black">
                    +91-123456789
                  </h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">Email</h1>
                  <h1 className="text-base font-normal text-black">
                    pankajvaghmashi@gmail.com
                  </h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">Name</h1>
                  <h1 className="text-base font-normal text-black">
                    pankaj ahir
                  </h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">Address</h1>
                  <h1 className="text-base font-normal text-black">
                    Bhatt Sector Gandhinagar
                  </h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">State</h1>
                  <h1 className="text-base font-normal text-black">Gujarat</h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">Pincode</h1>
                  <h1 className="text-base font-normal text-black">364522</h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">
                    Category
                  </h1>
                  <h1 className="text-base font-normal text-black">Shoes</h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">
                    SubCategory
                  </h1>
                  <h1 className="text-base font-normal text-black">Shoes</h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">
                    Incubation Center
                  </h1>
                  <h1 className="text-base font-normal text-black">Ahmedabad</h1>
                </div>
                <div className="left flex justify-between  pb-2">
                  <h1 className="text-base font-normal text-gray-400">
                    Incubation Center City
                  </h1>
                  <h1 className="text-base font-normal text-black">Ahmedabad</h1>
                </div>
              </div>
              <div className="button mt-5 flex justify-center items-center">
                <button className="loginbutton shadow-md w-[75%] h-[40px] font-semibold text-xl bg-none border border-green-600 rounded-br-lg">
                  INQUIRY NOW
                </button>
              </div>
            </div>
            <div className="rightbiggcontent">
              <div className="lorem">
                <h1 className="font-semibold text-xl mb-5">About Us:</h1>
                <p className="text-gray-400 font-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
              <div className="shoeslider w-auto">
                {/* pendding */}
              </div>
            </div>
          </div>
          <div className="award mt-10">
            <h1 className="text-xl font-semibold">Award</h1>
          <div className="shoesbox w-full  md:px-0 h-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-14 mt-10">
                {category &&
                  category.map((item) => (
                    <div className="gridbox h-auto" key={item.name}>
                      <img src={award} alt="" className="w-[295px] h-[207px]"/>
                      <h1 className="font-semibold text-xl pl-3">
                        Bharat Ratna-1 st degree of honour.
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="cirtificate mt-10">
          <h1 className="text-xl font-semibold">Certificate</h1>
          <div className="shoesbox w-full  md:px-0 h-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-14 mt-10">
                {category &&
                  category.map((item) => (
                    <div className="gridbox h-auto" key={item.name}>
                      <img src={award} alt="" className="w-[295px] h-[207px]"/>
                      <h1 className="font-semibold text-xl pl-3">
                        Bharat Ratna-1 st degree of honour.
                      </h1>
                    </div>
                  ))}
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Homestarup;
