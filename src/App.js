import React, { createContext, useState, useContext } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import Review from "./components/review";
import Adminedit from "./components/Adminedit";
import Listseller from "./components/Listseller";
import Signin from "./components/signin";
import TempData from "./components/tempdata"; 
import Test from "./components/test";
import Profile from "./components/profile";
import Contact from "./components/Contact";
import Submit from "./components/Submit";

const DataContext = createContext();

function App() {
  const [data, setData] = useState(TempData);

  const [rev, setRev] = useState(1);
  const [sale, setSale] = useState(1);

  return (
    <>
    <DataContext.Provider value={{ data, setData, rev, setRev, sale, setSale }}>
      <div className="container-fluid">
        <div className="row row1" style={{ marginBottom: "85px" }}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/test" element={<Test />} />
        <Route path="/edit" element={<Adminedit />} />
        <Route path="/list" element={<Listseller />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submit" element={<Submit />} />

      </Routes>
      
    </DataContext.Provider>
    <div style={{marginBottom :"-100px"}}>
    <Footer />
    </div>
    </>
  );
}

export { DataContext, App as default };
