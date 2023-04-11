import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import './julioCSS/juliojimenez.css';

function juliojimenez() {
  return (
    <>
    <Navbar />
    <div>
      <h1 className='header'>Julio Jimenez</h1>
      <p>
      <Link to="/JulioJimenez/inquiry">
        <button className= 'btn'>Inquiry</button>
      </Link>
      </p>
    </div>
    </>
  );
}

export default juliojimenez;
