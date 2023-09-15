import React, { useState } from 'react';
import '../../App.css'
import './julioCSS/AdminLanding.css'
import Navbar from "../Navbar";
import Footer from './Footer';


function AdminLanding() {
  const data = [
    { inquiryID: 1, requestorName: 'temp name', appointmentType: 'Full Day Session', tattooArtist: 'Julio Jimenez'}
  ];
  const [image, setImage] = useState(null);
  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <>
    <Navbar />
    <div className='landing'>
      <table>
        <thead>
          <tr>
            <th>Inquiry ID</th>
            <th>Requestor Name</th>
            <th>Appointment Type</th>
            <th>Tattoo Artist</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.inquiryID}</td>
              <td>{item.requestorName}</td>
              <td>{item.appointmentType}</td>
              <td>{item.tattooArtist}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className = 'file'>
        <label htmlFor="image">Upload Image
          <input type="file" name="image" onChange={(event) => setImage(event.target.files[0])} required />
        </label>
      </div>
      <div className = 'submit-button'>
        <button onClick={handleRefresh} type="button">Submit</button>
      </div>
    </div>
    
    
    <Footer />
    
    </>
  );
}

export default AdminLanding;