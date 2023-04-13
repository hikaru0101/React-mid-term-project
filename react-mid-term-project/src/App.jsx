import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import React, { useState, useEffect } from 'react'
// import { ChakraProvider } from "@chakra-ui/react";
import NewsList from "./pages/Headline/NewsList";
import NavBar from "./NavBar";
import Home from "./pages/Home/Home";
import PastArticles from "./pages/Pastarticles/PastArticles";
import Contact from "./pages/contact/Contact";
  import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";


const App = () => {
  return (
    // <ChakraProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Headline' element={<NewsList />} />
          <Route path='/Pastarticles' element={<PastArticles />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
    </Routes>
    <Footer />
</BrowserRouter>
// </ChakraProvider>   
  );
}

export default App;


