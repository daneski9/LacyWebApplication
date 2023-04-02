import Home from "./components/Home.js";
import Inquiry from "./components/Inquiry";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import ".//App.css";
//import Lounge from "./components/Lounge";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        
    <BrowserRouter>
        <Navbar />
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        
        
        
    </BrowserRouter>
        
        
    );
  }

export default App; 