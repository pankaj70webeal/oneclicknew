import shoes from "../images/Rectangle 344.png";
import { useNavigate } from 'react-router-dom';

function Myinquiry() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      category: "Category 1",
      subCategory: "Sub Category 1",
      status: "Available",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      category: "Category 2",
      subCategory: "Sub Category 2",
      status: "Available",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description 3",
      category: "Category 3",
      subCategory: "Sub Category 3",
      status: "Available",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description 4",
      category: "Category 4",
      subCategory: "Sub Category 4",
      status: "Available",
    },
    // Add more products as needed
  ];
  const navigate= useNavigate()
  const handleuserinquiry=()=>{
    navigate('/userinquiry')
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
                  <th className="px-4 py-2 text-left border-b">Startup Name</th>
                  <th className="px-4 py-2 text-left border-b">Inquiry Date</th>
                  <th className="px-4 py-2 text-left border-b">View</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b h-[56px]">
                    <td className="px-4 py-2 flex items-center space-x-4 font-medium text-base">
                      <img src={shoes} alt="" className='w-[50px] h-[50px]'/>
                      <span>{product.description}</span>
                    </td>
                    <td className="px-4 py-2 font-medium text-base">{product.name}</td>
                    <td className="px-4 py-2 font-medium text-base">{product.category}</td>
                    <td className="py-2">
                      <button className="loginbutton shadow-md w-full md:w-[126px] h-[42px] font-normal gradient-bg rounded-md text-white " onClick={handleuserinquiry}>
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

export default Myinquiry;
