import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ImageSlider from './components/ImageSlider';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>     
      </div>
    </Router>
  );
}

export default App;
