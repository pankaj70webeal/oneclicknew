import React from 'react';
import image from "../images/Group 677.png";
import edit from "../images/Group 1172.png";
import delet from "../images/Group 1171.png";
import { useNavigate } from 'react-router-dom';

function StartUp() {
    const navigate =useNavigate("")
    const handlestatupinfo=()=>{
        navigate("/startuptabs")
    }
    const data = [
        {
            img: image,
            name: 'WebEarl Technology Pvt Ltd',
            subname: 'Cradle, EDII',
            rating: 4.9,
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
            center: 'Incubation center',
            cradel: 'Centre for Advancing & Launching Enterprises (CrAdLE)'
        },
        {
            img: image,
            name: 'WebEarl Technology Pvt Ltd',
            subname: 'Cradle, EDII',
            rating: 4.9,
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
            center: 'Incubation center',
            cradel: 'Centre for Advancing & Launching Enterprises (CrAdLE)'
        },
        {
            img: image,
            name: 'WebEarl Technology Pvt Ltd',
            subname: 'Cradle, EDII',
            rating: 4.9,
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
            center: 'Incubation center',
            cradel: 'Centre for Advancing & Launching Enterprises (CrAdLE)'
        },
        {
            img: image,
            name: 'WebEarl Technology Pvt Ltd',
            subname: 'Cradle, EDII',
            rating: 4.9,
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
            center: 'Incubation center',
            cradel: 'Centre for Advancing & Launching Enterprises (CrAdLE)'
        },
        // Add more items if needed
    ];

    return (
        <div className="container flex flex-wrap justify-center">
            {data.map((item, index) => (
                <div key={index} className="card w-full sm:w-[calc(50%-16px)] md:w-[calc(50%-16px)] lg:w-[calc(50%-16px)] border rounded-lg shadow-lg m-2 p-4 bg-white">
                    <div className="flex justify-between mx-4 mt-4">
                        <div className="img flex space-x-2">
                            <img src={item.img} alt="" className="w-[61.46px] h-[61.46px] rounded-full" />
                            <div className="mt-2">
                                <h1 className="font-semibold">{item.name}</h1>
                                <h6 className="font-light">{item.subname}</h6>
                            </div>
                        </div>
                        <div className="start">{item.rating}</div>
                    </div>
                    <div className="flex justify-between mt-4 mx-4" onClick={handlestatupinfo}>
                        <div className="font-normal">{item.city}</div>
                        <div className="font-normal">{item.state}</div>
                        <div className="font-normal">{item.country}</div>
                    </div>
                    <div className="flex justify-between mt-4 mx-4 space-x-8">
                        <div className='font-semibold'>{item.center}</div>
                        <div dangerouslySetInnerHTML={{ __html: item.cradel }} className='font-semibold'></div>
                    </div>
                    <div className="flex justify-end mt-4 mx-4 space-x-3">
                        <img src={delet} alt="Delete" className="w-[45px] h-[45px] cursor-pointer" />
                        <img src={edit} alt="Edit" className="w-[40px] h-[40px] cursor-pointer" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default StartUp;
