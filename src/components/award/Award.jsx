import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import award from "../../images/Rectangle 325.png";
import { useNavigate } from "react-router-dom";

function Award() {
  const [view, setView] = useState("grid");
  const [viewe, setViewe] = useState("gride");
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
  const productse = [
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
  const categoryes = [
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
  const navigate=useNavigate()
  const handleaddaward=()=>{
    navigate('/addaward')
  }
  const handleaddcirtificate=()=>{
    navigate("/addcertificate")
  }
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
    <>
      <div className="container">
        <div className="title mx-4 md:mx-14 flex flex-col md:flex-row justify-between items-center mt-8 md:mt-14">
          <div className="productlist">
            <h1 className="font-semibold text-xl">Awards</h1>
          </div>
          <div className="button flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="loginbutton shadow-md w-full md:w-[169px] h-[39px] font-normal gradient-bg rounded-md" onClick={handleaddaward}>
              + Add Award
            </button>
            <div className="div w-full md:w-[104px] h-[39px] flex space-x-2">
              <button
                className={`loginbutton shadow-md w-full md:w-[52px] h-[39px] font-normal gradient-bg rounded-md flex items-center justify-center ${
                  view === "grid" ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => setView("grid")}
              >
                <FontAwesomeIcon icon={faTableCells} />
              </button>
              <button
                className={`loginbutton shadow-md w-full md:w-[52px] h-[39px] font-normal gradient-bg rounded-md flex items-center justify-center ${
                  view === "list" ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => setView("list")}
              >
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
          </div>
        </div>
        <div className="awardlist">
          {view === "list" && (
            <div className="listbox overflow-x-auto mt-8 md:mt-16 mx-4 md:mx-14">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left border-b">
                    Achievement Name
                    </th>
                    <th className="px-4 py-2 text-left border-b">
                    Place You Won Achievement
                    </th>
                    <th className="px-4 py-2 text-left border-b">Category</th>
                    <th className="px-4 py-2 text-left border-b">
                    Competition Name
                    </th>
                    <th className="px-4 py-2 text-left border-b">
                    Year You Won Achievement
                    </th>
                    <th className="px-4 py-2 text-left border-b">Edit</th>
                    <th className="px-4 py-2 text-left border-b">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b h-[56px]">
                      <td className="px-4 py-2 font-medium text-base">
                        {product.description}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.name}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.category}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.subCategory}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.status}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        <button className="text-green-500 underline font-medium text-base">
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-2">
                        <button className="text-red-500 underline font-medium text-base" onClick={handledelete}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="awardcard">
          {view === "grid" && (
            <div className="shoesbox w-full  md:px-0 h-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-14 mt-10">
                {category &&
                  category.map((item) => (
                    <div className="gridbox h-auto" key={item.name}>
                      <img src={award} alt="" className="w-[295px] h-[207px]"/>
                      <h1 className="font-semibold text-xl pl-3">
                        Bharat Ratna-1 st degree of honour.
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* cirftificte  */}
        <div className="title mx-4 md:mx-14 flex flex-col md:flex-row justify-between items-center mt-8 md:mt-14">
          <div className="productlist">
            <h1 className="font-semibold text-xl">cirtificate</h1>
          </div>
          <div className="button flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="loginbutton shadow-md w-full md:w-[169px] h-[39px] font-normal gradient-bg rounded-md" onClick={handleaddcirtificate}>
              + Add cirtificate
            </button>
            <div className="div w-full md:w-[104px] h-[39px] flex space-x-2">
              <button
                className={`loginbutton shadow-md w-full md:w-[52px] h-[39px] font-normal gradient-bg rounded-md flex items-center justify-center ${
                  viewe === "gride" ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => setViewe("gride")}
              >
                <FontAwesomeIcon icon={faTableCells} />
              </button>
              <button
                className={`loginbutton shadow-md w-full md:w-[52px] h-[39px] font-normal gradient-bg rounded-md flex items-center justify-center ${
                  viewe === "lists" ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => setViewe("lists")}
              >
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
          </div>
        </div>
        <div className="cirtificatelist">
          {viewe === "lists" && (
            <div className="listbox overflow-x-auto mt-8 md:mt-16 mx-4 md:mx-14">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left border-b">
                    Achievement Name
                    </th>
                    <th className="px-4 py-2 text-left border-b">
                    Place You Won Achievement
                    </th>
                    <th className="px-4 py-2 text-left border-b">Category</th>
                    <th className="px-4 py-2 text-left border-b">
                    Competition Name
                    </th>
                    <th className="px-4 py-2 text-left border-b">
                    Year You Won Achievement
                    </th>
                    <th className="px-4 py-2 text-left border-b">Edit</th>
                    <th className="px-4 py-2 text-left border-b">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {productse.map((product) => (
                    <tr key={product.id} className="border-b h-[56px]">
                      <td className="px-4 py-2 font-medium text-base">
                        {product.description}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.name}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.category}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.subCategory}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        {product.status}
                      </td>
                      <td className="px-4 py-2 font-medium text-base">
                        <button className="text-green-500 underline font-medium text-base">
                          Edit
                        </button>
                      </td>
                      <td className="px-4 py-2">
                        <button className="text-red-500 underline font-medium text-base">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="cirtificate">
          {viewe === "gride" && (
            <div className="shoesbox w-full  md:px-0 h-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-14 mt-10">
                {category &&
                  categoryes.map((item) => (
                    <div className="gridbox h-auto" key={item.name}>
                      <img src={award} alt="" className="w-[295px] h-[207px]"/>
                      <h1 className="font-semibold text-xl pl-3">
                        Bharat Ratna-1 st degree of honour.
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
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
                    Delete Award
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this Award? This action
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
    </>
  );
}

export default Award;
