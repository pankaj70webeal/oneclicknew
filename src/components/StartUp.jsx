import React, { useState } from "react";
import image from "../images/Group 677.png";
import edit from "../images/Group 1172.png";
import delet from "../images/Group 1171.png";
import { useNavigate } from "react-router-dom";

function StartUp() {
  const navigate = useNavigate("");
  const handlestatupinfo = () => {
    navigate("/startuptabs");
  };
  const data = [
    {
      img: image,
      name: "WebEarl Technology Pvt Ltd",
      subname: "Cradle, EDII",
      rating: 4.9,
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      center: "Incubation center",
      cradel: "Centre for Advancing & Launching Enterprises (CrAdLE)",
    },
    {
      img: image,
      name: "WebEarl Technology Pvt Ltd",
      subname: "Cradle, EDII",
      rating: 4.9,
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      center: "Incubation center",
      cradel: "Centre for Advancing & Launching Enterprises (CrAdLE)",
    },
    {
      img: image,
      name: "WebEarl Technology Pvt Ltd",
      subname: "Cradle, EDII",
      rating: 4.9,
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      center: "Incubation center",
      cradel: "Centre for Advancing & Launching Enterprises (CrAdLE)",
    },
    {
      img: image,
      name: "WebEarl Technology Pvt Ltd",
      subname: "Cradle, EDII",
      rating: 4.9,
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      center: "Incubation center",
      cradel: "Centre for Advancing & Launching Enterprises (CrAdLE)",
    },
    // Add more items if needed
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handledelete = () => {
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
      // Perform deletion action here
      console.log("Item deleted!");
    }, 1000); // Placeholder for async operation duration
  };

  return (
    <div className="container flex flex-wrap justify-center">
      {data.map((item, index) => (
        <div
          key={index}
          className="card w-full sm:w-[calc(50%-16px)] md:w-[calc(50%-16px)] lg:w-[calc(50%-16px)] border rounded-lg shadow-lg m-2 p-4 bg-white"
        >
          <div className="flex justify-between mx-4 mt-4">
            <div className="img flex space-x-2">
              <img
                src={item.img}
                alt=""
                className="w-[61.46px] h-[61.46px] rounded-full"
              />
              <div className="mt-2">
                <h1 className="font-semibold">{item.name}</h1>
                <h6 className="font-light">{item.subname}</h6>
              </div>
            </div>
            <div className="start">{item.rating}</div>
          </div>
          <div
            className="flex justify-between mt-4 mx-4"
            onClick={handlestatupinfo}
          >
            <div className="font-normal">{item.city}</div>
            <div className="font-normal">{item.state}</div>
            <div className="font-normal">{item.country}</div>
          </div>
          <div className="flex justify-between mt-4 mx-4 space-x-8">
            <div className="font-semibold">{item.center}</div>
            <div
              dangerouslySetInnerHTML={{ __html: item.cradel }}
              className="font-semibold"
            ></div>
          </div>
          <div className="flex justify-end mt-4 mx-4 space-x-3">
            <img
              src={delet}
              alt="Delete"
              className="w-[45px] h-[45px] cursor-pointer"
            />
            <img
              src={edit}
              alt="Edit"
              className="w-[40px] h-[40px] cursor-pointer"
              onClick={handledelete}
            />
          </div>
        </div>
      ))}
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
                    Delete Item
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this Statup? This action
                      cannot be undone.
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
                  isDeleting ? "opacity-50 cursor-not-allowed" : ""
                } w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:mr-3 sm:text-sm`}
              >
                {isDeleting ? "Deleting..." : "Yes"}
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
    </div>
  );
}

export default StartUp;
