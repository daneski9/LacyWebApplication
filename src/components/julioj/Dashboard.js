import React, { useState, useEffect } from 'react';
import '../../App.css'
import './julioCSS/Dashboard.css'
import Navbar from "../Navbar";
import Footer from './Footer';
import { db } from "../../DataBase";  // db const
import{collection, getDocs, query, where} from 'firebase/firestore'; // collection and getDocs const
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
  const [currentState, setCurrentState] = useState(1); // Initialize with State 1, being the Newest Inquiry State
  const InquirerCollectionRef = collection(db,"Inquirer");

  const fetchInquirerData = async (state) => {
    // Create a query to filter documents based on the current state value
    const q = query(InquirerCollectionRef, where("State", "==", state)); // states are 1-3, 1 = Newest Inquiry, 2 = In-Progress, 3 = Completed

    try {
      const querySnapshot = await getDocs(q);

      // Map the filtered documents to the state
      setInquirer(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))
      );
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  useEffect(() => {

    // Fetch data when the component mounts or when the currentState changes
    fetchInquirerData(currentState);
  }, [currentState]);

  // Function to handle button clicks and change the current state
  const handleButtonClick = (newState) => {
    setCurrentState(newState);

    };

    let pageTitle = "Newest Inquiry";
  if (currentState === 2) {
    pageTitle = "In-Progress";
  } else if (currentState === 3) {
    pageTitle = "Completed";
  }

  
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
        logoutNavigate("/JulioJimenez/about"); // Navigate to the main page after logout
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
        
        <div>
        <h1>{pageTitle}</h1> 
        <button onClick={() => handleButtonClick(1)}>Newest Inquiries</button>
        <button onClick={() => handleButtonClick(2)}>In-Progress</button>
        <button onClick={() => handleButtonClick(3)}>Completed</button>
        
      </div>
          <tr>
          
            <th>Inquirer ID</th>
            <th>Inquirer Name</th>
            <th>Inquirer Email</th>
            <th>Inquirer Phone</th>
            <th>Location on Body</th>
            <th>Tattoo Description</th>
            <th>Date</th>
            <th>State</th> 
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
              <td>{Inquiry.State}</td>
            </tr>
          )
          
        })}
        </tbody>
        </table>
        </div>

      <div className = 'file'>
        <label htmlFor="image">Upload Image (Multiple)
          <input type="file" name="image" multiple onChange={(event) => setImage(event.target.files)} />
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