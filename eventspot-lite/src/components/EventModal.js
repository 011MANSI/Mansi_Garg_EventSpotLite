// src/components/EventModal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../styles/EventModal.css';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <img src={event.image} alt={event.name} />
      </div>
    </div>
  );
};

export default EventModal;
