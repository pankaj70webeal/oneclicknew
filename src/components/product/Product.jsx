import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faList } from "@fortawesome/free-solid-svg-icons";
import shoes from "../../images/Rectangle 71.png";
import { useNavigate } from "react-router-dom";

function Product() {
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

  const [view, setView] = useState("grid"); // Default view is set to grid

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
  const navigate= useNavigate()
  const handleaddproduct=()=>{
    navigate('/addproduct')
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
      <div className="container mx-auto">
        <div className="filter mx-4 md:mx-14 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Select"
            className="w-full md:w-[350px] h-[44px] border rounded-lg pl-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Select Sub-Category"
            className="w-full md:w-[350px] h-[44px] border rounded-lg pl-3 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-[150px] h-[42px] border rounded-lg pl-3 focus:outline-none"
          />
        </div>
        <div className="title mx-4 md:mx-14 flex flex-col md:flex-row justify-between items-center mt-8 md:mt-14">
          <div className="productlist">
            <h1 className="font-semibold text-xl">All Product</h1>
          </div>
          <div className="button flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="loginbutton shadow-md w-full md:w-[169px] h-[39px] font-normal gradient-bg rounded-md" onClick={handleaddproduct}>
              + Add Product
            </button>
            <div className="div w-full md:w-[104px] h-[39px] flex space-x-2">
              <button
                className={`loginbutton shadow-md w-full md:w-[52px] h-[39px] font-normal gradient-bg rounded-md flex items-center justify-center ${view === 'grid' ? 'bg-green-600 text-white' : ''}`}
                onClick={() => setView("grid")}
              >
                <FontAwesomeIcon icon={faTableCells} />
              </button>
              <button
                className={`loginbutton shadow-md w-full md:w-[52px] h-[39px] font-normal gradient-bg rounded-md flex items-center justify-center ${view === 'list' ? 'bg-green-600 text-white' : ''}`}
                onClick={() => setView("list")}
              >
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
          </div>
        </div>
        {view === "list" && (
          <div className="listbox overflow-x-auto mt-8 md:mt-16 mx-4 md:mx-14">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left border-b">
                    Product Description
                  </th>
                  <th className="px-4 py-2 text-left border-b">Product Name</th>
                  <th className="px-4 py-2 text-left border-b">Category</th>
                  <th className="px-4 py-2 text-left border-b">Sub Category</th>
                  <th className="px-4 py-2 text-left border-b">Product Status</th>
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
        {view === "grid" && (
          <div className="shoesbox w-full px-4 md:px-0 h-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-14 mt-10">
              {category &&
                category.map((item) => (
                  <div
                    className="gridbox border w-[269px] h-auto shadow-2xl p-4"
                    key={item.name}
                  >
                    <div className="margen">
                      <div className="box mt-8">
                        <img
                          src={shoes}
                          alt=""
                          className="w-[216px] h-[90px]"
                        />
                      </div>
                      <div className="name w-full h-[56px] mt-3">
                        <h1 className="font-semibold text-base">{item.name}</h1>
                      </div>
                      <div className="name w-full h-[18px] mt-1">
                        <p className="font-medium text-xs text-lime-500">
                          Rainbow shoes & enterprise
                        </p>
                      </div>
                      <div className="name w-full h-[40px] mt-1 flex justify-between border-b">
                        <p className="font-medium text-xs">Prototype</p>
                        <p className="font-medium text-xs">${item.price}</p>
                      </div>
                      <div className="category flex justify-between w-full h-[56px] mt-1">
                        <div className="1">
                          <p className="font-light text-xs">Category</p>
                          <p className="font-semibold text-xs">
                            {item.category}
                          </p>
                        </div>
                        <div className="div">
                          <p className="font-light text-xs">Subcategory</p>
                          <p className="font-semibold text-xs">
                            {item.subcategory}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
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
                    Delete Product
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this Product? This action
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

export default Product;
