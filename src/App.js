import ".//App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Lounge from "./components/Lounge";
//Julio imports:
import Juliojimenez from "./components/julioj/juliojimenez";
import AboutJulioJimenez from "./components/julioj/AboutJulioJimenez";
import ContactJulioJimenez from "./components/julioj/ContactJulioJimenez";
import InquiryJulioJimenez from "./components/julioj/InquiryJulioJimenez";
import PortfolioJulioJimenez from "./components/julioj/PortfolioJulioJimenez";
import ServicesJulioJimenez from "./components/julioj/ServicesJulioJimenez";

//Next artist imports:



function App() {
    return (
        
    <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Lounge />} />
            <Route path="/Juliojimenez" element={<Juliojimenez />} />
            <Route path="/AboutJulioJimenez" element={<AboutJulioJimenez />} />
            <Route path="/ContactJulioJimenez" element={<ContactJulioJimenez />} />
            <Route path="/InquiryJulioJimenez" element={<InquiryJulioJimenez />} />
            <Route path="/PortfolioJulioJimenez" element={<PortfolioJulioJimenez />} />
            <Route path="/ServicesJulioJimenez" element={<ServicesJulioJimenez />} />


        </Routes>
        
        
        
    </BrowserRouter>
        
        
    );
  }

export default App; 