import React from "react";
import './index.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';
import { Route, Routes } from "react-router-dom";
import Privacy from "./Pages/Privacy";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
