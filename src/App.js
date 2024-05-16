import './App.css';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Header from './Components/Header/Header';
import { Pages } from './Components/PageManager/Pages';

function App() {

  return (
    <>
      <Header />
      <div>
        <Routes>
          {Pages.map((el) => (
            <Route path={el.path} element={el.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
