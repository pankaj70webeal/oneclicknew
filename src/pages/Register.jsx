import { useState } from "react";
import one from "../images/Group 610.png";
import backimage from "../images/Profile.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    state: "",
    city: "",
    address: "",
    pincode: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async() => {
    // Perform validation here if needed
    // Then make the API call
    try {
      const response = await fetch(`http://localhost:8000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
      toast.success("Login Successful!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/");
    }, 2000);
      const responseData = await response.json();
      localStorage.setItem("token", responseData.data.token);
      localStorage.setItem("userid", responseData.data.id);
      console.log(responseData);
    } catch (error) {
      if (error) {
        toast.error("Invalid email or password!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        });
      }
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-6xl"> {/* Added max-w-6xl for maximum width */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 mb-10">
          <div className="content md:w-[389px] w-full h-auto md:h-[778px] shadow-2xl md:-ml-8 mt-8 mb-8">
            <div className="logo flex justify-between mt-10 mx-10">
              <img src={one} alt="logo" className="w-[100.16px] h-[46px]" />
              <button
                className="loginbutton shadow-md w-[100px] h-[36px] font-normal bg-none border border-green-600 rounded-br-lg"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
            </div>
            <div className="john flex flex-col justify-center items-center mt-10">
              <h1 className="font-semibold text-lg">Create account</h1>
              <p className="w-[254px] text-xs font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <div className="input flex flex-col justify-center items-center mt-16">
              <input
                type="text"
                className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                placeholder="Full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                placeholder="Contact number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className="state flex justify-between w-[300px]">
                <input
                  type="text"
                  className="w-[130px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="w-[130px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <textarea
                // name=""
                id=""
                className="w-[300px] h-[103px] mb-5 border rounded-lg pl-3 focus:outline-none"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              ></textarea>
              <input
                type="text"
                className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
              />
            </div>
            <div className="submit flex justify-center mt-2">
              <button className="loginbutton shadow-md w-[114px] h-[36px] font-normal gradient-bg rounded-full" onClick={handleSignup}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="resterback hidden md:block md:w-[400px] w-full h-auto md:h-[778px] flex justify-center items-center shadow-md">
            <img src={backimage} alt="" className="mt-52" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
