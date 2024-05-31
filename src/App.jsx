// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Myprofile from "./pages/Myprofile";
import Addstartup from "./components/startup/Addstartup";
import Startuptabs from "./pages/Startuptabs";
import Addproduct from "./components/product/Addproduct";
import Addaward from "./components/award/Addaward";
import Home2 from "./pages/Home2";
import Homeproduct from "./components/Homeproduct";
import Homestarup from "./components/Homestarup";
import Userinquiry from "./components/Userinquiry";
import Addcertificate from "./components/award/Addcertificate";
import Startupinquiry from "./components/Startupinquiry";
import Startupinquirychat from "./components/Startupinquirychat";
// import Sliderjoin from "./components/Sliderjoin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/myprofile"
            element={
              <>
                <Navbar />
                <Myprofile />
                <Footer />
              </>
            }
          />
           <Route
            path="/addstartup"
            element={
              <>
                <Navbar />
                <Addstartup/>
                <Footer />
              </>
            }
          />
          <Route
            path="/startuptabs"
            element={
              <>
                <Navbar />
                <Startuptabs/>
                <Footer />
              </>
            }
          />
          <Route
            path="/addproduct"
            element={
              <>
                <Navbar />
                <Addproduct/>
                <Footer />
              </>
            }
          />
           <Route
            path="/addaward"
            element={
              <>
                <Navbar />
                <Addaward/>
                <Footer />
              </>
            }
          />
          <Route
            path="/addcertificate"
            element={
              <>
                <Navbar />
                <Addcertificate/>
                <Footer />
              </>
            }
          />
          <Route
            path="/home2"
            element={
              <>
                <Navbar />
                <Home2/>
                <Footer />
              </>
            }
          />
           <Route
            path="/homeproduct"
            element={
              <>
                <Navbar />
                <Homeproduct/>
                <Footer />
              </>
            }
          />
           <Route
            path="/homestartup"
            element={
              <>
                <Navbar />
                <Homestarup/>
                <Footer />
              </>
            }
          />
          <Route
            path="/userinquiry"
            element={
              <>
                <Navbar />
                <Userinquiry/>
                <Footer />
              </>
            }
          />
           <Route
            path="/startupinquir"
            element={
              <>
                <Navbar />
                <Startupinquirychat/>
                <Footer />
              </>
            }
          />
           <Route
            path="/statupinquiryfollow"
            element={
              <>
                <Navbar />
                <Startupinquiry/>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
