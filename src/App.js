import Home from "./webpages/Home";
import Inquiry from "./webpages/Inquiry";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
        
        <BrowserRouter>
            <Routes>
                <Route path='/' exact='Home'></Route>
            </Routes>
        </BrowserRouter>
        
        </>
    );
  }

export default App;