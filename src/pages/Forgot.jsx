import React, { useState, useRef } from "react";
import one from "../images/Group 610.png";
import back from "../images/Profile.png";
import { useNavigate } from "react-router-dom";
import success from "../images/Group 1177.png"

function Forgot() {
  const [contentStage, setContentStage] = useState(1);
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [error, setError] = useState("");

  // Create refs for each input field
  const inputRefs = useRef([]);

  const handleContinue = () => {
    if (contentStage === 2) {
      const code = verificationCode.join("");
      if (code === "123456") {
        setContentStage(contentStage + 1);
        setError("");
      } else {
        setError("Invalid verification code");
      }
    } else {
      setContentStage(contentStage + 1);
    }
  };

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      // Allow only numeric values
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Move focus to the next input field
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }

      // Move focus to the previous input field if backspace is pressed
      if (value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };
  const navigate =useNavigate()
  const handleLogin = (e) => {
    navigate("/login")
  }
  return (
    <div className="container mx-auto">
      <div className="margin flex justify-center items-center mt-10">
        <div className="content md:flex justify-center items-center">
          <div className="login md:w-[50%] h-auto md:h-[480px] border rounded-lg shadow-2xl">
            {contentStage === 1 && (
              <>
                <div className="logo flex justify-between mt-10 mx-10">
                  <img src={one} alt="logo" className="w-[100.16px] h-[46px]" />
                </div>
                <div className="john flex flex-col justify-center items-center mt-10">
                  <h1 className="font-semibold text-lg mb-5">
                    Forgot Password
                  </h1>
                  <p className="w-[254px] text-xs font-normal text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    sed do euiument tempo
                  </p>
                </div>
                <div className="input flex flex-col justify-center items-center mt-8">
                  <input
                    type="email"
                    className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <div className="submit flex justify-center">
                  <button
                    onClick={handleContinue}
                    className="loginbutton shadow-md w-[114px] h-[36px] font-normal gradient-bg rounded-full text-white"
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
            {contentStage === 2 && (
              <div className="new-content flex flex-col mt-10">
                <div className="logo flex justify-start mx-10">
                  <img src={one} alt="logo" className="w-[100.16px] h-[46px]" />
                </div>
                <div className="john flex flex-col justify-center items-center mt-10">
                  <h1 className="font-semibold text-lg mb-5">
                    Forgot Password
                  </h1>
                  <p className="w-[254px] text-xs font-normal text-center">
                    Enter your code that you received on your email.
                  </p>
                </div>
                <div className="input flex justify-center items-center mt-8 space-x-2">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      maxLength="1"
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="w-[40px] h-[35px] mb-5 border rounded-lg text-center focus:outline-none"
                      placeholder="0"
                    />
                  ))}
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="submit flex justify-center">
                  <button
                    onClick={handleContinue}
                    className="loginbutton shadow-md w-[114px] h-[36px] font-normal gradient-bg rounded-full text-white"
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}
            {contentStage === 3 && (
              <div className="new-content  flex flex-col mt-10">
                <div className="logo flex justify-start mx-10">
                  <img src={one} alt="logo" className="w-[100.16px] h-[46px]" />
                </div>
                <div className="john flex flex-col justify-center items-center mt-10">
                  <h1 className="font-semibold text-lg mb-5">
                    Forgot Password
                  </h1>
                  <p className="w-[254px] text-xs font-normal text-center">
                    set the new password for your account so you can login and
                    access
                  </p>
                </div>
                <div className="input flex flex-col justify-center items-center mt-8">
                  <input
                    type="password"
                    className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                    placeholder="New Password"
                  />
                  <input
                    type="password"
                    className="w-[300px] h-[35px] mb-5 border rounded-lg pl-3 focus:outline-none"
                    placeholder="Confirm New Password"
                  />
                </div>
                <div className="submit flex justify-center">
                  <button
                    onClick={handleContinue}
                    className="loginbutton shadow-md w-[130px] h-[36px] font-normal gradient-bg rounded-full text-white"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            )}
             {contentStage === 4 && (
              <>
                <div className="new-content flex flex-col mt-10">
                  <div className="logo flex justify-start mx-10">
                    <img src={one} alt="logo" className="w-[100.16px] h-[46px]" />
                  </div>
                  <div className="image flex justify-center items-center mt-12 mb-8">
                    <img src={success} alt="" className="w-[124px] " />
                  </div>
                  <div className="submit flex justify-center">
                    <button
                      onClick={handleLogin}
                      className="loginbutton shadow-md w-[114px] h-[36px] font-normal gradient-bg rounded-full text-white"
                    >
                      Login
                    </button>
                    
                  </div>
                  <p className="w-[254px] text-xs font-normal text-center m-auto mt-5">
                  Your password has been forgot successfully.
                  </p>
                </div>
              </>
            )}
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

export default Forgot;
