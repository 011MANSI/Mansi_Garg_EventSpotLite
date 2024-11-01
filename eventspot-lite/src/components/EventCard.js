// src/components/EventCard.js
import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventCard;
