import ".//App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from "./components/Login";
import Lounge from "./components/Lounge";
import UpdatePassword from "./components/UpdatePassword";
//Julio imports:
import AboutJulioJimenez from "./components/julioj/AboutJulioJimenez";
import ContactJulioJimenez from "./components/julioj/ContactJulioJimenez";
import InquiryJulioJimenez from "./components/julioj/InquiryJulioJimenez";
import PortfolioJulioJimenez from "./components/julioj/PortfolioJulioJimenez";
import ServicesJulioJimenez from "./components/julioj/ServicesJulioJimenez";
import AdminLanding from "./components/julioj/AdminLanding";
import PaymentOptions from "./components/julioj/PaymentOptions";


//Next artist imports:



function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lounge />} />
            <Route path="/JulioJimenez/about" element={<AboutJulioJimenez />} />
            <Route path="/JulioJimenez/contact" element={<ContactJulioJimenez />} />
            <Route path="/JulioJimenez/inquiry" element={<InquiryJulioJimenez />} />
            <Route path="/JulioJimenez/portfolio" element={<PortfolioJulioJimenez />} />
            <Route path="/JulioJimenez/services" element={<ServicesJulioJimenez />} />
            <Route path="/JulioJimenez/login" element={<Login />} />
            <Route path="/JulioJimenez/resetpassword" element={<UpdatePassword />} />
            <Route path="/JulioJimenez/adminlanding" element={<AdminLanding />} />
            <Route path="/JulioJimenez/payment" element={<PaymentOptions />} />

        </Routes>
    </BrowserRouter>
    );
  }

export default App; 