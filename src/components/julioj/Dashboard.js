import React, { useState, useEffect } from 'react';
import '../../App.css'
import './julioCSS/Dashboard.css'
import Navbar from "../Navbar";
import Footer from './Footer';
import { db } from "../../DataBase";  // db const
import{doc, updateDoc, deleteDoc, collection, getDocs, query, where, orderBy, writeBatch} from 'firebase/firestore'; // collection and getDocs const
//import { orderBy, set } from 'lodash';
import { getAuth } from 'firebase/auth';
// Uncomment for access to image database
import { storage } from "../../DataBase";
import { getDownloadURL, ref, uploadBytes, listAll } from 'firebase/storage';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import InquiryModal from './InquiryModal';
import { deleteObject } from 'firebase/storage';
import emailjs from '@emailjs/browser';


function AdminLanding() {
  // Cloud Database Stuff
  const [Inquirer, setInquirer] = useState([]);
  const [currentState, setCurrentState] = useState(1); // Initialize with State 1, being the Newest Inquiry State
  const InquirerCollectionRef = collection(db, "Inquirer");

  const fetchInquirerData = async (state) => {
    // Create a query to filter documents based on the current state value
    const q = query(InquirerCollectionRef, where("State", "==", state), orderBy ("Date", "desc")); // states are 1-3, 1 = Newest Inquiry, 2 = In-Progress, 3 = Completed // OrderBy Date

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
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      let amOrPm = "AM";
  
      if (hours >= 12) {
        amOrPm = "PM";
        if (hours > 12) {
          hours -= 12;
        }
      }
  
      const formattedDate = `${month}-${day}-${year} @ ${hours}:${minutes} ${amOrPm}`;
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




  const handleUpdateStateEmail = async (inquiry, emailText) => {
    try {      
      // Update the state (In-Progress) "2"
      await updateStateInFirestore(inquiry, 2);

      // Create a template with the parameters for the email
      const templateParams = {
        name: inquiry.First + " " + inquiry.Last,
        id: inquiry.id,
        location: inquiry.Location,
        description: inquiry.Description
      };

      // Implement the logic to send an email here using the emailText.
      console.log('Email sent successfully.'); 
      console.log('Email text:', templateParams);

      // Scroll to the top of the page immediately after hitting submit
      window.scrollTo(0, 0);

      // Await the email sending process
      try {
          await emailjs.send('service_ystt4qc', 'template_efod31y', templateParams, 'rBdv4vbxFl9erDx3J');
          console.log("SENT EMAIL!");
      } catch (error) {
          console.log(error.text);
      }
  
      closeModal(); // Close the modal after updating the state.
  
      // Fetch the updated data to refresh the table with the latest information.
      fetchInquirerData(currentState);
    } catch (error) {
      console.error('Error updating state and sending email: ', error);
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
  const [disable, setDisable] = useState("true");

  const handleImage = (e) => {
    setImage(e.target.files);
    console.log(e.target.files);
    setDisable("");
    console.log("enable button");
  };

  //const [ imageInfo ] = useState(null);
  //const [imageInfo, setImageInfo] = useState([]);

  const uploadFiles = async () => {
    for (let i = 0; i < image.length; i++) {
      const imageRef = ref(storage, `gs://daring-wavelet-384121.appspot.com/ImageData/${image.name + v4()}`);

      const result = await uploadBytes(imageRef, image[i])
      .then(() => { 
        setImage("");
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

//////////////////////////////////////////////////// 
//Portfolio Add/remove images:////////////////////
////////////////////////////////////////////////////
const [imageList, setImageList] = useState([]);
const [showPortfolioGrid, setShowPortfolioGrid] = useState(false);
const [imagesLoading, setImagesLoading] = useState(false);

const togglePortfolioGrid = async () => {
  if (!showPortfolioGrid && imageList.length === 0) { // check if the imageList is empty
    setImagesLoading(true); // Start loading
    await fetchPortfolioImages();
    setImagesLoading(false); // End loading
  }
  setShowPortfolioGrid(!showPortfolioGrid);
};

const removeImage = async (image) => {
  const confirmDelete = window.confirm('Remove image?');
  if (confirmDelete) {
    const imageName = image.split("/").pop().split("?")[0];
    const decodedImageName = decodeURIComponent(imageName);
    const imageRef = ref(storage, decodedImageName);
    await deleteObject(imageRef);
    setImageList(prev => prev.filter(img => img !== image));
  }
};

const fetchPortfolioImages = async () => {
  let images = [];
  const imagesRef = ref(storage, 'Portfolio-page');
  const imageRefs = await listAll(imagesRef);
  for (let imageRef of imageRefs.items) {
    const imageURL = await getDownloadURL(imageRef);
    images.push(imageURL);
  }
  setImageList(images);
};

const handleAddImages = async (e) => {
  const files = e.target.files;
  if (files.length === 0) {
    return;
  }
  const uploadPromises = Array.from(files).map(async file => {
    const imageRef = ref(storage, `Portfolio-page/${file.name + v4()}`);
    await uploadBytes(imageRef, file);
    return getDownloadURL(imageRef);
  });
  try {
    const newImageURLs = await Promise.all(uploadPromises);
    const updatedImageList = [...imageList, ...newImageURLs];
    setImageList(updatedImageList);
    alert('Image(s) uploaded successfully');
  } catch (error) {
    console.error('Error uploading image(s):', error);
  }
  e.target.value = null;
};

const toggleAddImageModal = () => {
  const fileInput = document.getElementById('addPortfolioImages');
  fileInput.click();
};
//////////////////////////////////////////////////// 
////////////////////////////////////////////////////
////////////////////////////////////////////////////
const deleteAllByState = async (state) => {
  // Confirmation check
  const isConfirmed = window.confirm(`Delete all ${getStateName(state)} inquiries? *Warning: Cannot undo this action!*`);
  if (!isConfirmed) return;

  // Create a query to filter documents based on the state value
  const q = query(InquirerCollectionRef, where("State", "==", state));

  try {
    const querySnapshot = await getDocs(q);
    const batch = writeBatch(db);  // Initialize the batch

    querySnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref); // Schedule a delete operation for every document
    });

    await batch.commit();  // Commit the batch
    console.log(`All documents with state ${getStateName(state)} deleted successfully.`);

    // Refresh the data to update the table
    fetchInquirerData(currentState);
  } catch (error) {
    console.error("Error deleting documents: ", error);
  }
};

const getStateName = (stateValue) => {
  switch (stateValue) {
    case 3:
      return 'Completed';
    case 2:
      return 'In-progress';
    case 1:
      return 'Newest';
    default:
      return 'Unknown';
  }
}


setTimeout(() => {
  const elements = document.getElementsByClassName('welcome-message');
  if (elements.length > 0) {
    const txt = elements[0]; // Access the first element with the class name
    txt.style.display = 'none';
  }
}, 5000);

  return (
    <>
    <Navbar />
    <div className='landing'>
    {showModal && (
      <div className="modal">
      <InquiryModal inquiry={selectedInquiry} 
      onClose={closeModal} 
      onUpdateState={handleUpdateState}
      onUpdateStateEmail={handleUpdateStateEmail} 
      onDelete={handleDelete} />
      </div>
      
    )}

      <div class = "dash-top-container">
        <h1 className = 'admin-page-title'>{pageTitle}</h1> 
      <div className='btn-group' style={{width:'100%'}}>
        <button 
            className={`inquire-btn ${currentState === 1 ? 'button-selected' : ''}`} 
            onClick={() => handleButtonClick(1)} 
            style={{width:'33.3%'}}
        >
            Newest
        </button>
        <button 
            className={`inquire-btn ${currentState === 2 ? 'button-selected' : ''}`} 
            onClick={() => handleButtonClick(2)} 
            style={{width:'33.3%'}}
        >
            In-Progress
        </button>
        <button 
            className={`inquire-btn ${currentState === 3 ? 'button-selected' : ''}`} 
            onClick={() => handleButtonClick(3)} 
            style={{width:'33.3%'}}
        >
            Completed
        </button>
      </div>

      </div>
      <div className='table'>  
      <table>
        
        <thead>
          <tr>
          
            
            <th className = "table-title">Inquirer Name</th>
            <th className = "table-title">Date Created</th>
            <th className = "table-title">Action</th> 
          </tr>
        </thead>
        <tbody>
        {Inquirer.map((Inquiry) => {
          return (
            <tr key={Inquiry.id}>
              <td className= "fnameLname">{Inquiry.First} {Inquiry.Last}</td>
              <td>{formatTimestamp(Inquiry.Date)}</td>
              <td>
                <div className="action-buttons">
                  <button className="open-btn" onClick={() => handleButtonAction(Inquiry)}>Open</button>
                  <button className="x-btn" onClick={() => handleDelete(Inquiry)}>X</button>
                </div>
              </td>

            </tr>
          )
          
        })}
        </tbody>
        </table>
        
      </div>
      {/* 
      <div className = 'file'>
        <label htmlFor="image">Upload Image (Multiple)
          <input type="file" name="image" accept=".jpg, .png" multiple onChange={handleImage} />
        </label>
      </div>
      <div className = 'submit-button'>
        <button onClick={uploadFiles} type="button" disabled={disable}>Submit</button>
      </div>
      */}
      </div>
       
    {/* Portfolio Grid Code */}
    {
        showPortfolioGrid && (
          <div class="grid-container">
            <div className="portfolioGrid">
              {imageList.map((image, index) => (
               <div key={index} className="portfolioImage" onClick={() => removeImage(image)}>
                 <img src={image} alt={`Portfolio ${index}`} />
                </div>
             ))}
            </div>
          </div>

        )
    }
    {/*
   <input type="file" id="addPortfolioImages" style={{ display: 'none' }} multiple onChange={handleAddImages} />
    {
      imagesLoading && (
        <div className="loader-container">
          <div className="loader"></div> {}
        </div>
      )
    }
    
    <div className="bottom-container-dash">
      <div className="btn-group2">
        <button className="portfolioEdit-btn" onClick={togglePortfolioGrid}>Remove Image From Portfolio</button>
        <button className="portfolioEdit-btn" onClick={toggleAddImageModal}>Add Portfolio Image(s)</button>
      </div>
      <div className="btn-group3">
        <Link to="/JulioJimenez/updatepassword">
          <button className="logout-btn">UPDATE PASSWORD</button>
        </Link>
        <button className = "logout-btn" onClick={handleLogout}>LOGOUT</button>
      </div>
      
      <div className="deleteAll-btns">
        <button onClick={() => deleteAllByState(1)}>Delete All<br />Newest</button>
        <button onClick={() => deleteAllByState(2)}>Delete All<br />In-progress</button>
        <button onClick={() => deleteAllByState(3)}>Delete All<br />Completed</button>
      </div>

      </div>
    <Footer />
    
    </>
  );
}

export default AdminLanding;
