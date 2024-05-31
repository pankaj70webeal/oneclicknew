function Addstartup() {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="info mx-4 md:mx-24 mt-10 md:mt-28 mb-10">
          <h1 className="font-semibold text-2xl">+ Add Start-up</h1>
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br className="hidden md:block" /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="md:flex  mx-4 md:mx-24 space-x-0 md:space-x-6">
          <div className="form w-full md:w-1/2 h-auto">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">Start-up name</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px] "
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">About StartUp</label>
              <textarea
                className="w-full h-[157px] border rounded-lg pl-3 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Email Id</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Incubation Center</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Incubation Center City</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Select Years of established</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Registered as</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Business Category</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
          </div>
          <div className="form w-full md:w-1/2 h-auto mt-6 md:mt-0">
            <div className="flex flex-col">
              <label htmlFor="" className="font-semibold">Contact No</label>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="border rounded-lg pl-3 focus:outline-none w-1/5 md:w-[60px] h-[46px]"
                />
                <input
                  type="text"
                  className="border rounded-lg pl-3 focus:outline-none w-4/5 md:w-[465px] h-[46px]"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Upload Image</label>
              <textarea
                className="w-full h-[157px] border rounded-lg pl-3 focus:outline-none"
              ></textarea>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Contact Person</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col md:flex-row w-full gap-2 justify-between">
              <div className="flex flex-col mt-3 w-full ">
                <label htmlFor="" className="font-semibold">Select Country</label>
                <input
                  type="text"
                  className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
                />
              </div>
              <div className="flex flex-col mt-3 w-full ">
                <label htmlFor="" className="font-semibold">Select State</label>
                <input
                  type="text"
                  className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-2 justify-between">
              <div className="flex flex-col mt-3 w-full ">
                <label htmlFor="" className="font-semibold">Select City</label>
                <input
                  type="text"
                  className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
                />
              </div>
              <div className="flex flex-col mt-3 w-full ">
                <label htmlFor="" className="font-semibold">Select Pincode</label>
                <input
                  type="text"
                  className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Select Start-Up category</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Select Start-Up Sub-category</label>
              <input
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[46px]"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="" className="font-semibold">Address</label>
              <textarea
                type="text"
                className="border rounded-lg pl-3 focus:outline-none w-full h-[157px]"
              />
            </div>
          </div>
        </div>
        <div className="submit flex justify-center mt-10">
          <button className="loginbutton shadow-md w-[300px] md:w-[400px] h-[36px] font-semibold text-lg gradient-bg rounded-md">
            Add Start-up
          </button>
        </div>
      </div>
    </>
  );
}

export default Addstartup;
