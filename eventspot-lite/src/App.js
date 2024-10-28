// src/App.js
import React from 'react';
import EventList from './components/EventList';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>EventSpot Lite</h1>
      </header>
      <EventList />
    </div>
  );
};

export default App;
