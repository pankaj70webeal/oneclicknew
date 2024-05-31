import imag1 from "../images/Group 610.png"
import imag2 from "../images/Ellipse 35 (1).png"       
import imag3 from "../images/Ellipse 34.png"       
import imag4 from "../images/Ellipse 33.png"       
import imag5 from "../images/Ellipse 32.png"       
import imag6 from "../images/Group 565.png"       

function Footer() {
  return (
    <>
    <div className="container mx-auto mt-16 px-4">
      <div className="footer w-full  h-auto lg:h-[400px] mx-auto mt-16 border-t border-gray-300 shadow-2xl flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 p-4 lg:p-8 rounded-sm">
        <div className="w-full lg:w-[206px] h-auto lg:h-[94.61px] lg:mr-16 flex justify-center lg:justify-start">
          <img src={imag1} alt="Logo" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-semibold">Links</h1>
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Customer Care</h6>
          <h6>Free Listing</h6>
          <h6>Media</h6>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-semibold">OC Expert</h1>
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Customer Care</h6>
          <h6>Free Listing</h6>
          <h6>Media</h6>
        </div>
        <div className="text-center lg:text-left">
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Customer Care</h6>
          <h6>Free Listing</h6>
          <h6>Media</h6>
        </div>
        <div className="text-center lg:text-left">
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Customer Care</h6>
          <h6>Free Listing</h6>
          <h6>Media</h6>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="font-semibold flex justify-center items-center text-base ">Connect with Us</h1>
          <div className="logo flex justify-center lg:justify-start space-x-4 mt-2">
            <img src={imag2} alt="Logo 1" className="w-[26.88px] h-[26.88px]" />
            <img src={imag3} alt="Logo 2" className="w-[26.88px] h-[26.88px]" />
            <img src={imag4} alt="Logo 3" className="w-[26.88px] h-[26.88px]" />
            <img src={imag5} alt="Logo 4" className="w-[26.88px] h-[26.88px]" />
          </div>
          <div className="playstore mt-4">
            <img src={imag6} alt="Playstore" className="w-[159.28px] h-[111.21px]" />
          </div>
          
        </div>
      </div>
    </div>
  </>  
  )
}

export default Footer
