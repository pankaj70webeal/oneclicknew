// import React from 'react'
import image from "../images/Group 402.png"
import image2 from "../images/Group 605.png"

function Justjoin() {
  return (
    <>
      <div className="container mt-10">
        <div className="card">
        <div className="flex justify-between">
        <h1 className="font-semibold  h-[53px] text-4xl">Just Join</h1>
        <img src={image} alt="" className="w-[100.18px] h-[41.06px] cursor-pointer" />
        </div>
        <div className="image mt-10">
            <img src={image2} alt="" />
        </div>
        </div>
      </div>
    </>
  )
}

export default Justjoin
