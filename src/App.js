import React from "react";
import "./index.css";
import Home from "./router/Home";
import About from "./router/About";
import Project from "./router/Project";
import Contact from "./router/Contact";
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='project/' element={<Project />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </BrowserRouter>  
    
    
  );
}

export default App;
