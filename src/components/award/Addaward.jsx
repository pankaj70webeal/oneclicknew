function Addaward() {
  return (
    <>
      <div className="container mx-auto">
        <div className="margin mx-4 md:mx-16">
          <div className="title w-full md:w-[252px] h-auto mt-9 md:mt-5">
            <h1 className="font-medium text-2xl">Add Awards</h1>
          </div>
          <div className="form grid grid-cols-1 md:grid-cols-2 mt-5 gap-y-5 md:gap-x-8">
            <div className="left">
              <p className="font-normal text-lg text-gray-400">Description</p>
              <textarea
                type="text"
                className="w-full h-[95px] border rounded-lg pl-1 focus:outline-none"
              />
              <p className="font-normal text-lg text-gray-400 mt-8">
                Competition Name
              </p>
              <input
                type="text"
                className="w-full h-[35px] border rounded-lg pl-1 focus:outline-none"
              />
              <p className="font-normal text-lg text-gray-400 mt-8">
                Upload Image
              </p>
              <input
                type="file"
                className="w-full h-[35px] border rounded-lg pl-1 focus:outline-none"
              />
            </div>
            <div className="right">
              <div className="input-field ">
                <p className="font-normal text-lg text-gray-400">
                  Achievement Title{" "}
                </p>
                <input
                  type="text"
                  className="w-full h-[35px] border rounded-lg pl-1 focus:outline-none"
                />
              </div>
              <div className="input-field mt-5">
                <p className="font-normal text-lg text-gray-400">
                  Place You Won Achievement{" "}
                </p>
                <input
                  type="text"
                  className="w-full h-[35px] border rounded-lg pl-1 focus:outline-none"
                />
              </div>
              <div className="input-field mt-5">
                <p className="font-normal text-lg text-gray-400">
                  Year of Achievement{" "}
                </p>
                <input
                  type="text"
                  className="w-full h-[35px] border rounded-lg pl-1 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="submit mt-8">
            <button className="loginbutton text-white shadow-md w-full md:w-[250px] h-[45px] font-normal gradient-bg rounded-lg">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addaward;
