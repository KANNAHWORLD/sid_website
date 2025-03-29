import './App.css';
import React from 'react';
import Home from './Components/Webpages/Home';
import Resources from './Components/Webpages/Resources';
import Contact from './Components/Webpages/Contact';
import Coffee from './Components/Webpages/Coffee';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AWSSummit2024 from './Components/Webpages/ResourcesOthers/AWSSummit2024';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Resources />} />
          <Route path='/Resources/AWSSummit2024' element={<AWSSummit2024 />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/contact' element={<Contact />} />
          {/* Catch-all route to redirect to Home page */}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
