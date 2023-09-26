import React, { useState } from 'react';
import '../../App.css'
import './julioCSS/AdminLanding.css'
import Navbar from "../Navbar";
import Footer from './Footer';

// Uncomment for access to image database
// import { storage } from "../../DataBase";
// import { ref, uploadBytes } from 'firebase/storage';
// import { v4 } from 'uuid';

// TODO: Impliment JSON fro imageInfo
// import {  } from "json";


function AdminLanding() {
  const data = [
    { inquiryID: 1, requestorName: 'temp name', appointmentType: 'Full Day Session', tattooArtist: 'Julio Jimenez'}
  ];
  const [image, setImage] = useState(null);
//   const [ imageInfo ] = useState(null);
  const handleRefresh = () => {
    window.location.reload();

    // Probably can remove this
    // if(image == null) return;
    // let tmp = v4();
    // const imageRef = ref(storage, `gs://daring-wavelet-384121.appspot.com/ImageData/${image.name + tmp}`);

    // // TODO: image information JSON, imageInfo.json
    // // const imageInfo = json
    // const imageRefInfo = ref(storage, `gs://daring-wavelet-384121.appspot.com/ImageInformation/${image.name+tmp}`);
    // fetch("imageInfo.json")
    //     .then(response => response.json())
    //     .then(imageInfo => {
    //         imageInfo.orignalName = image.name;
    //         imageInfo.imageHash = tmp;
    //     })
    // uploadBytes( imageRef, image ).then(()=>{
    //     alert("Image Uploaded");
    // })
    // uploadBytes(imageRefInfo, imageInfo).then(()=>{}
    // );
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