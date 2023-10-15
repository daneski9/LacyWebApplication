import ".//App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";
import Lounge from "./components/Lounge";
import UpdatePassword from "./components/UpdatePassword";
//Julio imports:
import AboutJulioJimenez from "./components/julioj/AboutJulioJimenez";
import ContactJulioJimenez from "./components/julioj/ContactJulioJimenez";
import InquiryJulioJimenez from "./components/julioj/InquiryJulioJimenez";
import PortfolioJulioJimenez from "./components/julioj/PortfolioJulioJimenez";
import ServicesJulioJimenez from "./components/julioj/ServicesJulioJimenez";
import Dashboard from "./components/julioj/Dashboard";
import PaymentOptions from "./components/julioj/PaymentOptions";


//Next artist imports:



function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lounge />} />
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/JulioJimenez/dashboard' element={<Dashboard/>}/>
            </Route>
            <Route path="/JulioJimenez/about" element={<AboutJulioJimenez />} />
            <Route path="/JulioJimenez/contact" element={<ContactJulioJimenez />} />
            <Route path="/JulioJimenez/inquiry" element={<InquiryJulioJimenez />} />
            <Route path="/JulioJimenez/portfolio" element={<PortfolioJulioJimenez />} />
            <Route path="/JulioJimenez/services" element={<ServicesJulioJimenez />} />
            <Route path="/JulioJimenez/login" element={<Login />} />
            <Route path="/JulioJimenez/signup" element={<SignUp />} />
            <Route path="/JulioJimenez/authdetails" element={<AuthDetails />} />
            <Route exact path='/' element={<PrivateRoute/>}>
                <Route exact path='/JulioJimenez/updatepassword' element={<UpdatePassword/>}/>
            </Route>
            <Route path="/JulioJimenez/payment" element={<PaymentOptions />} />

        </Routes>
    </BrowserRouter>
    );
  }

export default App; 