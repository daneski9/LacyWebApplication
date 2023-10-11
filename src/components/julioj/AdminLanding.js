import React, { useState, useEffect } from 'react';
import '../../App.css'
import './julioCSS/AdminLanding.css'
import Navbar from "../Navbar";
import Footer from './Footer';
import { db } from "../../DataBase";  // db const
import{collection, getDocs} from 'firebase/firestore'; // collection and getDocs const
import { set } from 'lodash';
import { getAuth } from 'firebase/auth';
// Uncomment for access to image database
import { storage } from "../../DataBase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

// TODO: Impliment JSON fro imageInfo
// import {  } from "json";


function AdminLanding() {
  // Cloud Database Stuff
  const [Inquirer, setInquirer] = useState([]);
  const InquirerCollectionRef = collection(db,"Inquirer");
  useEffect(() => {

    const getInquirer = async () => {
      const dbData = await getDocs(InquirerCollectionRef);
      setInquirer(dbData.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }                                 

    getInquirer();

  }, []);
  // end Cloud Database Stuff
  
  const [image, setImage] = useState(null);
  //const [ imageInfo ] = useState(null);
  //const [imageInfo, setImageInfo] = useState([]);

  const uploadFiles = async () => {
    for (let i = 0; i < image.length; i++) {
      const imageRef = ref(storage, `gs://daring-wavelet-384121.appspot.com/ImageData/${image.name + v4()}`);

      const result = await uploadBytes(imageRef, image[i])
      .then(() => { 
        alert('Images uploaded');
      });
    }
  };

  // const handleFileInput = (event) => {
  //   const files = event.target.files;
  //   uploadFiles(files);
  // };

  // const uploadFile = (event) => {
  //   const files = event.target.files;
  //   // window.location.reload();
  //   if (files.length === 0) return;

  //   const imagePromises = Array.from(files).map((file) => {
  //   const imageRef = ref(storage, `gs://daring-wavelet-384121.appspot.com/ImageData/${image.name + v4()}`);
  //   return uploadBytes(imageRef, file);
  //   });

  //   Promise.all(imagePromises)
  //     .then(() => {
  //       alert('Images uploaded');
  //     })
  //     .catch((err) => {
  //       console.error('Error uploading images: ', err);
  //     });
  // };
  

  // To show current email logged in:
  const [email, setEmail] = useState("");
  useEffect(() => {
    const authEmail = getAuth().currentUser?.email;  // ? is a Safe-check if currentUser exists
    if (authEmail) {
      setEmail(authEmail);
    }
  }, []);

  // To logout:
  const auth = getAuth();
  const logoutNavigate = useNavigate();
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
        await signOut(auth);  // Logout the user. pause the function's execution until the promise from signOut(auth) is either fulfilled or rejected.
        window.scrollTo(0, 0);
        logoutNavigate("/"); // Navigate to the main page after logout
        // Check if the user is still logged in
        if (auth.currentUser) {
          console.log('User is still logged in:', auth.currentUser.email);
        } 
        else {
          console.log('User successfully logged out.');
        }
    } catch (error) {
        console.log('Error logging out:', error);
    }
  };

  return (
    <>
    <Navbar />
    <div className='welcome-message'>Welcome, {email} </div>
    <div className='landing'>
      <div className='table'>  
      <table>
        <thead>
          <tr>
          
            <th>Inquirer ID</th>
            <th>Inquirer Name</th>
            <th>Inquirer Email</th>
            <th>Inquirer Phone</th>
            <th>Location on Body</th>
            <th>Tattoo Description</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
        {Inquirer.map((Inquiry) => {
          return (
            <tr>
              <td>{Inquiry.id}</td>
              <td>{Inquiry.First} {Inquiry.Last}</td>
              <td>{Inquiry.Email}</td>
              <td>{Inquiry.Phone}</td>
              <td>{Inquiry.Location}</td>
              <td>{Inquiry.Description}</td>
              <td>{Inquiry.Date}</td>
            </tr>
          )
          
        })}
        </tbody>
        </table>
        </div>

      <div className = 'file'>
        <label htmlFor="image">Upload Image (Multiple)
          <input type="file" multiple onChange={(event) => {
            setImage(event.target.files);
            // setImageInfo(event.target.files);
          }} />
        </label>
      </div>
      <div className = 'submit-button'>
        <button onClick={uploadFiles} type="button">Submit</button>
      </div>
    </div>
    <button class = "logout-btn" onClick={handleLogout}>LOGOUT</button>
    
    
    <Footer />
    
    </>
  );
}

export default AdminLanding;