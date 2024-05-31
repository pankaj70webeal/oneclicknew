import { useNavigate } from "react-router-dom";
import imag1 from "../images/Ellipse 16.png";
import img2 from "../images/Group 584.png";
import shoes from "../images/Rectangle 71.png";

function Home2() {
  const data = Array(19).fill({ img: imag1, name: "Agriculture" });
  const navigate = useNavigate();
  const handlehomeproduct = () => {
    navigate("/homeproduct");
  };
  const sub = [
    { name: "Agriculture" },
    { name: "Real estate" },
    { name: "Doctors" },
    { name: "Beauty&spa" },
    { name: "Agriculture" },
    { name: "Real estate" },
    { name: "Doctors" },
    { name: "Beauty&spa" },
    { name: "Agriculture" },
    { name: "Real estate" },
    { name: "Doctors" },
    { name: "Beauty&spa" },
    { name: "Agriculture" },
    { name: "Real estate" },
    { name: "Doctors" },
    { name: "Beauty&spa" },
    { name: "Agriculture" },
    { name: "Real estate" },
    { name: "Doctors" },
    { name: "Beauty&spa" },
  ];

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
    {
      name: "Product 4",
      price: 99.99,
      category: "Sports",
      subcategory: "Outdoor",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="xl:flex  md:flex-nowrap space-x-0 xl:space-x-8 my-8 mx-10">
        <div className="sidebar md:w-[343px] w-full h-auto border p-4 overflow-hidden shadow-lg rounded-md mb-8 md:mb-0">
          <h1 className="py-4 text-xl font-semibold">Related categories</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-[40px] border border-gray-300 rounded-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
          </div>

          {data.map((e, index) => (
            <div key={index} className="category flex items-center mt-5">
              <img src={e.img} alt="" className="w-10 h-10 rounded-full" />
              <p className="font-medium text-base pl-3">{e.name}</p>
            </div>
          ))}
        </div>
        <div className="rightcontent flex-1">
          <div className="top flex flex-wrap md:flex-nowrap space-x-0 md:space-x-8">
            <div className="subcategory w-full md:w-[565px] h-auto border p-4 shadow-md mb-8 md:mb-0">
              <h1 className="font-semibold text-xl pb-3">All Category</h1>
              <div className="flex flex-wrap">
                {sub.map((e, index) => (
                  <div className="w-1/2 md:w-1/4 p-2" key={index}>
                    <p className="font-medium text-lg cursor-pointer" onClick={handlehomeproduct}>
                      {e.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="profile w-full md:w-[223px] h-[179px]">
              <img src={img2} alt="" className="cursor-pointer w-full h-full object-cover" />
            </div>
          </div>
          <div className="shoes mt-10">
            <div className="shoesbox w-full px-4 md:px-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.map((item) => (
                  <div className="gridbox border p-4 shadow-2xl" key={item.name}>
                    <div className="box mt-8">
                      <img src={shoes} alt="" className="w-full h-[90px]" />
                    </div>
                    <div className="name mt-3">
                      <h1 className="font-semibold text-base">{item.name}</h1>
                    </div>
                    <div className="name mt-1">
                      <p className="font-medium text-xs text-lime-500">Rainbow shoes & enterprise</p>
                    </div>
                    <div className="name mt-1 flex justify-between border-b">
                      <p className="font-medium text-xs">Prototype</p>
                      <p className="font-medium text-xs">${item.price}</p>
                    </div>
                    <div className="category flex justify-between mt-1">
                      <div>
                        <p className="font-light text-xs">Category</p>
                        <p className="font-semibold text-xs">{item.category}</p>
                      </div>
                      <div>
                        <p className="font-light text-xs">Subcategory</p>
                        <p className="font-semibold text-xs">{item.subcategory}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
