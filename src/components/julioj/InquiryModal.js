import React from 'react';
import './InquiryModal.css';



function InquiryModal({ inquiry, onClose, onUpdateState, onDelete }) {

  if (!inquiry) {
    return null; // If 'inquiry' is null, return nothing, debugs errors when table is not fully filled out
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Inquiry Details</h2>
        <p>Date: {inquiry.Date}</p>
        <p>ID: {inquiry.id}</p>
        <p>Name: {inquiry.First} {inquiry.Last}</p>
        <p>Email: {inquiry.Email}</p>
        <p>Phone: {inquiry.Phone}</p>
        <p>Location: {inquiry.Location}</p>
        <p>Descripton: {inquiry.Description}</p>
        <p>Reference Images: </p>
        <div className = 'StateButton'>
          {inquiry.State === 1 && (
            <button onClick={() => onUpdateState(inquiry, 2)}>Mark In-Progress</button>
          )}
          {inquiry.State === 2 && (
            <button onClick={() => onUpdateState(inquiry, 3)}>Mark Completed</button>
          )}
        </div>
        <button onClick={() => onDelete(inquiry)} className="delete-button">Delete</button>
        

        
        <button className="close-button" onClick={onClose}>Close</button>

        
      </div>
      
    </div>
  );
}

export default InquiryModal;
