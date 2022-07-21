import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import "../HomeView/HomeView.css";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Works from "../../components/Works/Works";
import Contact from "../../components/Contact/Contact";
import {Routes, Route} from "react-router-dom";

const HomeView = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default HomeView;