// src/components/EventList.js
import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';
import SearchBar from './SearchBar';
import events from '../data/events';
import '../styles/EventList.css';

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="event-list">
      <SearchBar onSearch={setSearchTerm} />
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
        ))}
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  );
};

export default EventList;
