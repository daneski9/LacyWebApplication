import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
function juliojimenez() {
  return (
    <>
    <Navbar />
    <div>
      <p>
      <Link to="/JulioJimenez/inquiry">
        <button>Inquiry</button>
      </Link>
      </p>
    </div>
    </>
  );
}

export default juliojimenez;
