import ".//App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./components/Login";
import Lounge from "./components/Lounge";
import ResetPassword from "./components/ResetPassword";
//Julio imports:
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
            <Route path="/JulioJimenez/about" element={<AboutJulioJimenez />} />
            <Route path="/JulioJimenez/contact" element={<ContactJulioJimenez />} />
            <Route path="/JulioJimenez/Inquiry" element={<InquiryJulioJimenez />} />
            <Route path="/JulioJimenez/Portfolio" element={<PortfolioJulioJimenez />} />
            <Route path="/JulioJimenez/Services" element={<ServicesJulioJimenez />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />

        </Routes>
        
        
        
    </BrowserRouter>
        
        
    );
  }

export default App; 