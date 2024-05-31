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
      </div>
    </>
  );
}

export default Product;
