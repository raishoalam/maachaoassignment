import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar globally render ho raha hai */}
      
      <Routes>
        {/* Different routes for different pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
