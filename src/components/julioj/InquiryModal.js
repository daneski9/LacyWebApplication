import React, { useState } from 'react';
import './InquiryModal.css';



function InquiryModal({ inquiry, onClose, onUpdateState, onDelete, onUpdateStateEmail }) {

  const [emailText, setEmailText] = useState(''); // State for email text

  const formatTimestamp = (timestamp) => {
    if (timestamp && timestamp.toDate) {
      const date = timestamp.toDate();
  
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const year = String(date.getFullYear()).slice(-2);
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      let amOrPm = "AM";
  
      if (hours >= 12) {
        amOrPm = "PM";
        if (hours > 12) {
          hours -= 12;
        }
      }
  
      const formattedDate = `${month}-${day}-${year} @ ${hours}:${minutes}:${seconds} ${amOrPm}`;
      return formattedDate;
    } else {
      return "Invalid Timestamp";
    }
  };

  if (!inquiry) {
    return null; // If 'inquiry' is null, return nothing, debugs errors when table is not fully filled out
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <h2>Inquiry Details</h2>
          <p>Date: {formatTimestamp(inquiry.Date)}</p>
          <p>ID: {inquiry.id}</p>
          <p>Name: {inquiry.First} {inquiry.Last}</p>
          <p>Email: {inquiry.Email}</p>
          <p>Phone: {inquiry.Phone}</p>
          <p>Location: {inquiry.Location}</p>
          <p>Descripton: {inquiry.Description}</p>
          <div className="StateButton">
            {inquiry.State === 1 ? (
              <div>
                <button onClick={() => onUpdateState(inquiry, 2)} className="Mark-In-Progress-button">Mark In-Progress Only</button>
                {inquiry.State === 1 && (
                  <div>
                    <button
                      onClick={() => onUpdateStateEmail(inquiry, emailText)}
                      className="send-email-button"> Mark In-Progress and Send Email</button>
                    <input
                     type="text"
                     value={emailText}
                     onChange={(e) => setEmailText(e.target.value)}
                     placeholder="Enter email text..."
                     className="email-text-input" 
                    />
                    
                  </div>
                )}
              </div>
            ) : inquiry.State === 2 ? (
              <button onClick={() => onUpdateState(inquiry, 3)}>Mark Completed</button>
            ) : null}
          </div>
          <button onClick={() => onDelete(inquiry)} className="delete-button">Delete</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="modal-right">
          <p>Reference Images:</p>
          <img src={inquiry.ImageRef} alt="Reference Image" />
        </div>
      </div>
    </div>
  );
}

export default InquiryModal;
