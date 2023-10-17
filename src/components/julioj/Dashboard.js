import React, { useState, useEffect } from 'react';
import '../../App.css'
import './julioCSS/Dashboard.css'
import Navbar from "../Navbar";
import Footer from './Footer';
import { db } from "../../DataBase";  // db const
import{doc, updateDoc, deleteDoc, collection, getDocs, query, where,} from 'firebase/firestore'; // collection and getDocs const
import { orderBy, set } from 'lodash';
import { getAuth } from 'firebase/auth';
// Uncomment for access to image database
import { storage } from "../../DataBase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import InquiryModal from './InquiryModal';
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

  const formatTimestamp = (timestamp) => {
    if (timestamp && timestamp.toDate) {
      const date = timestamp.toDate();
      
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2); 
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      
      const formattedDate = `${month}-${day}-${year} @ ${hours}:${minutes}:${seconds}`;
      return formattedDate;
    } else {
      return "Invalid Timestamp";
    }
  };

  const updateStateInFirestore = async (inquiry, newState) => {
    const inquiryDocRef = doc(db, 'Inquirer', inquiry.id);
    await updateDoc(inquiryDocRef, { State: newState });
    console.log('State updated successfully.');
  };

  const handleUpdateState = async (inquiry) => {
    
    try {
      if (inquiry.State === 1) {
        // Update the state to 2 (In-Progress)
        await updateStateInFirestore(inquiry, 2);
      } else if (inquiry.State === 2) {
        // Update the state to 3 (Completed)
        await updateStateInFirestore(inquiry, 3);
      }
      
      closeModal(); // Close the modal after updating the state.

      // Fetch the updated data to refresh the table with the latest information.
    fetchInquirerData(currentState);
    } catch (error) {
      console.error('Error updating state: ', error);
    }
  };
  

  useEffect(() => {

    // Fetch data when the component mounts or when the currentState changes
    fetchInquirerData(currentState);
  }, [currentState]);

    // Modal Stuff

const [showModal, setShowModal] = useState(false);
const [selectedInquiry, setSelectedInquiry] = useState(null);

    // Function to open the modal and set the selected inquiry
const openModal = (Inquiry) => {
  setSelectedInquiry(Inquiry);
  setShowModal(true);
  console.log("showModal:", showModal);
};
    // Function to close the modal
const closeModal = () => {
  setSelectedInquiry(null);
  setShowModal(false);
  console.log("closeModal:", showModal);
};
    // End Modal Stuff

  

  // Function to handle Inquiry Button clicks
  const handleButtonAction = (Inquiry) => {
    // You can access the inquiry's details here and perform actions.
    console.log("Button clicked for inquiry:", Inquiry);
    openModal(Inquiry);
    // For example, you can open a modal to display more information or perform other actions.
    console.log("showModal:", showModal);
    console.log("selectedInquiry:", selectedInquiry);
    // Implement your custom logic here.
  };


  // Function to handle button clicks and change the current state
  const handleButtonClick = (newState) => {
    setCurrentState(newState);

    };


  // function to handle deleting an inquiry
  const handleDelete = async (inquiry) => {
    // Add logic to confirm the delete action, e.g., a confirmation dialog
    const confirmDelete = window.confirm('Are you sure you want to delete this inquiry?');
  
    if (confirmDelete) {
       // Delete the inquiry from the database
      // Be sure to add the necessary Firestore deletion logic.
      const inquiryDocRef = doc(db, 'Inquirer', inquiry.id);
      await deleteDoc(inquiryDocRef);
      console.log('Inquiry deleted successfully.');

     

      // This Removes the inquiry from the UI without refreshing the page or repulling the data from the database
      setInquirer((prevInquirer) => prevInquirer.filter((item) => item.id !== inquiry.id));
  
      // Close the modal after deleting the inquiry.
      closeModal();
    }
  };

  
 
  
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


// Set page title based on the current state, should be recoded to start as Newest Inquiry, then change based on button click
  let pageTitle = "Newest Inquiry";
  if (currentState === 2) {
    pageTitle = "In-Progress";
  } else if (currentState === 3) {
    pageTitle = "Completed";
  }

  return (
    <>
    <Navbar />
    
    <div className='welcome-message'>Welcome, {email} </div>
    <div className='landing'>
      {showModal && (
      <div className="modal">
      <InquiryModal inquiry={selectedInquiry} 
      onClose={closeModal} 
      onUpdateState={handleUpdateState} 
      onDelete={handleDelete} />
      </div>
      
)}

      <div>
        <h1>{pageTitle}</h1> 
        <button onClick={() => handleButtonClick(1)}>Newest Inquiries</button>
        <button onClick={() => handleButtonClick(2)}>In-Progress</button>
        <button onClick={() => handleButtonClick(3)}>Completed</button>
        
      </div>
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
            <th>Action</th> 
          </tr>
        </thead>

        <tbody>
        {Inquirer.map((Inquiry) => {
          return (
            <tr key={Inquiry.id}>
              <td>{Inquiry.id}</td>
              <td>{Inquiry.First}
               {Inquiry.Last}</td>
              <td>{Inquiry.Email}</td>
              <td>{Inquiry.Phone}</td>
              <td>{Inquiry.Location}</td>
              <td>{Inquiry.Description}</td>
              <td>{formatTimestamp(Inquiry.Date)}</td>
              <td>
                <button onClick={()=> handleButtonAction(Inquiry)}>Open</button>
              </td>
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
    
    <Link to="/JulioJimenez/updatepassword">
      <button class="logout-btn">UPDATE PASSWORD</button>
    </Link>
    
    
    <Footer />
    
    </>
  );
}

export default AdminLanding;