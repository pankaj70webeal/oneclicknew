import React from 'react'
import { useNavigate } from 'react-router-dom';
import shoes from "../images/Rectangle 344.png";

function Startupinquiry() {
  const inquiries = [
    {
      id: 1,
      product: "Product 1",
      username: "User 1",
      email: "user1@example.com",
      inquiryDate: "2024-05-31",
      status: "Available",
    },
    {
      id: 2,
      product: "Product 2",
      username: "User 2",
      email: "user2@example.com",
      inquiryDate: "2024-05-30",
      status: "Available",
    },
    // Add more inquiries as needed
  ];

  const navigate= useNavigate();

  const handleUserInquiry = () => {
    navigate('/startupinquir');
  }

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="inquiry w-full max-w-[1147px] h-auto mx-auto">
          <div className="listbox overflow-x-auto mt-8 md:mt-16">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left border-b">Product</th>
                  <th className="px-4 py-2 text-left border-b">Username</th>
                  <th className="px-4 py-2 text-left border-b">Email Id</th>
                  <th className="px-4 py-2 text-left border-b">Inquiry Date</th>
                  <th className="px-4 py-2 text-left border-b">View</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="border-b h-[56px]">
                    <td className="px-4 py-2 flex items-center space-x-4 font-medium text-base">
                      <img src={shoes} alt="" className='w-[50px] h-[50px]'/>
                      <span>{inquiry.product}</span>
                    </td>
                    <td className="px-4 py-2 font-medium text-base">{inquiry.username}</td>
                    <td className="px-4 py-2 font-medium text-base">{inquiry.email}</td>
                    <td className="px-4 py-2 font-medium text-base">{inquiry.inquiryDate}</td>
                    <td className="py-2">
                      <button className="loginbutton shadow-md w-full md:w-[126px] h-[42px] font-normal gradient-bg rounded-md text-white " onClick={handleUserInquiry}>
                        View More
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Startupinquiry;
