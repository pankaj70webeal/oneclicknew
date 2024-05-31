import React from 'react';

function Myfullinfo() {
  return (
    <>
      <div className="container mt-32 w-full max-w-[1102.43px] h-auto mx-auto px-4">
        <div className="username flex flex-col md:flex-row md:justify-between mb-5">
          <label htmlFor="" className='text-xl font-semibold mb-2 md:mb-0'>Username</label>
          <input type="text" className='w-full md:w-[895.5px] h-[57.18px] border rounded-lg pl-3 focus:outline-none shadow-sm' />
        </div>
        <div className="contect flex flex-col md:flex-row mb-5">
          <label htmlFor="" className='text-xl font-semibold mb-2 md:mb-0'>Contact No</label>
          <input type="text" className='w-full md:w-[81.98px] h-[57.18px] border rounded-lg pl-3 focus:outline-none md:ml-[105px] md:mr-4 shadow-md mb-2 md:mb-0' />
          <input type="text" className='w-full md:w-[186.78px] h-[57.18px] border rounded-lg pl-3 focus:outline-none shadow-sm' />
        </div>
        <div className="email flex flex-col md:flex-row md:justify-between mb-5">
          <label htmlFor="" className='text-xl font-semibold mb-2 md:mb-0'>Email Id</label>
          <input type="text" className='w-full md:w-[895.5px] h-[57.18px] border rounded-lg pl-3 focus:outline-none shadow-sm' />
        </div>
        <div className="state flex flex-col md:flex-row md:justify-between mb-5">
          <label htmlFor="" className='text-xl font-semibold mb-2 md:mb-0'>State</label>
          <input type="text" className='w-full md:w-[895.5px] h-[57.18px] border rounded-lg pl-3 focus:outline-none shadow-sm' />
        </div>
        <div className="City flex flex-col md:flex-row md:justify-between mb-5">
          <label htmlFor="" className='text-xl font-semibold mb-2 md:mb-0'>City</label>
          <input type="text" className='w-full md:w-[895.5px] h-[57.18px] border rounded-lg pl-3 focus:outline-none shadow-sm' />
        </div>
        <div className="address flex flex-col md:flex-row md:justify-between mb-5">
          <label htmlFor="" className='text-xl font-semibold mb-2 md:mb-0'>Address</label>
          <input type="text" className='w-full md:w-[895.5px] h-[57.18px] border rounded-lg pl-3 focus:outline-none shadow-sm' />
        </div>
        <div className="pincode flex flex-col md:flex-row mb-5">
          <label htmlFor="" className='text-xl font-semibold mb-2 md:mb-0'>Pincode</label>
          <input type="text" className='w-full md:w-[287.43px] h-[57.18px] border rounded-lg pl-3 focus:outline-none md:ml-[133px] shadow-sm' />
        </div>
        <div className="Edit flex justify-end">
          <button className="loginbutton shadow-md w-full md:w-[247px] h-[58.41px] font-normal gradient-bg rounded-md font-semibold text-lg">
            EDIT
          </button>
        </div>
      </div>
    </>
  );
}

export default Myfullinfo;
