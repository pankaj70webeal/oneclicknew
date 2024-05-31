import React from "react";
import one from "../images/Group 610.png";
import back from "../images/Profile.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handlesignup = () => {
    navigate("/register");
  };

  return (
    <div className="container mx-auto">
      <div className="margin flex justify-center items-center mt-10">
        <div className="content md:flex justify-center items-center">
          <div className="login md:w-[50%] h-auto md:h-[480px] border rounded-lg shadow-2xl">
            <div className="logo flex justify-between mt-10 mx-10">
              <img src={one} alt="logo" className="w-[100.16px] h-[46px]" />
              <button
                className="loginbutton shadow-md w-[100px] h-[36px] font-normal bg-none border border-green-600 rounded-br-lg"
                onClick={handlesignup}
              >
                Sign Up
              </button>
            </div>
            <div className="john flex flex-col justify-center items-center mt-10">
              <h1 className="font-semibold text-lg">Hey, John</h1>
              <p className="w-[254px] text-xs font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do
                euiument tempo
              </p>
            </div>
            <div className="input flex flex-col justify-center items-center mt-16">
              <input
                type="email"
                className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-[300px] h-[35px] border rounded-lg pl-3 focus:outline-none"
                placeholder="Password"
              />
              <div className="forgot flex justify-end w-[300px]">
                <p className="text-xs">Forgot password?</p>
              </div>
            </div>
            <div className="submit flex justify-center mt-10">
              <button className="loginbutton shadow-md w-[114px] h-[36px] font-normal gradient-bg rounded-full">
                Log In
              </button>
            </div>
          </div>
          <div className="loginimage hidden md:flex justify-center items-center md:w-[50%] w-full h-[480px] shadow-lg rounded-lg mt-8 md:mt-0">
            <img
              src={back}
              alt="background"
              className="w-[450px] h-[370.1px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
