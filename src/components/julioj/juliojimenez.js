import { Link } from 'react-router-dom';
import JulioNavbar from "../julioj/JulioNavbar";
function juliojimenez() {
  return (
    <>
    <JulioNavbar />
    <div>
      <p>
      <Link to="/InquiryJulioJimenez">
        <button>Inquiry</button>
      </Link>
      </p>
    </div>
    </>
  );
}

export default juliojimenez;
