import './App.css';
import './Website.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './Components/Header';
import Contact from './Webpages/Contact';
import Home from './Webpages/Home';

import { Pages } from './Webpages/Pages';

function App() {

  return (
    <>
      <Header />
      <Routes>

        {Pages.map((el) => (
          <Route path={el.path} element={el.element} />
        ))}
        {/* <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Contact' element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
