import React from "react";

function MyFullInfo() {
  return (
    <div className="container mx-auto md:mx-5  max-w-4xl px-4">
      <div className="flex flex-col md:flex-row md:items-center mb-5">
        <label
          htmlFor="username"
          className="text-lg font-medium mb-2 md:mb-0 md:w-1/4"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full md:w-3/4 h-10 border rounded-lg focus:outline-none shadow-sm px-3"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-5">
        <label
          htmlFor="contact1"
          className="text-lg font-medium mb-2 md:mb-0 md:w-1/4 "
        >
          Contact No
        </label>
        <div className="flex flex-col md:flex-row w-full md:space-x-3 md:ml-14">
          <input
            type="text"
            id="contact1"
            className="w-full md:w-[100px] h-10 border rounded-lg focus:outline-none shadow-sm px-3"
          />
          <input
            type="text"
            id="contact2"
            className="w-full md:w-[180px] h-10 border rounded-lg focus:outline-none shadow-sm px-3 mt-2 md:mt-0"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-5">
        <label
          htmlFor="email"
          className="text-lg font-medium mb-2 md:mb-0 md:w-1/4"
        >
          Email Id
        </label>
        <input
          type="email"
          id="email"
          className="w-full md:w-3/4 h-10 border rounded-lg focus:outline-none shadow-sm px-3"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-5">
        <label
          htmlFor="state"
          className="text-lg font-medium mb-2 md:mb-0 md:w-1/4"
        >
          State
        </label>
        <input
          type="text"
          id="state"
          className="w-full md:w-3/4 h-10 border rounded-lg focus:outline-none shadow-sm px-3"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-5">
        <label
          htmlFor="city"
          className="text-lg font-medium mb-2 md:mb-0 md:w-1/4"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          className="w-full md:w-3/4 h-10 border rounded-lg focus:outline-none shadow-sm px-3"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-5">
        <label
          htmlFor="address"
          className="text-lg font-medium mb-2 md:mb-0 md:w-1/4"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          className="w-full md:w-3/4 h-10 border rounded-lg focus:outline-none shadow-sm px-3"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-5">
        <label
          htmlFor="pincode"
          className="text-lg font-medium mb-2 md:mb-0 md:w-1/4"
        >
          Pincode
        </label>
        <input
          type="text"
          id="pincode"
          className="w-full md:w-[100px] h-10 border rounded-lg focus:outline-none shadow-sm px-3"
        />
      </div>
      <div className="flex justify-end">
        <button className="loginbutton shadow-md w-[114px] h-[36px] font-normal gradient-bg rounded-full">
          EDIT
        </button>
      </div>
    </div>
  );
}

export default MyFullInfo;
