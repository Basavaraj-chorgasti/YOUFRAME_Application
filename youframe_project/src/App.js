import React from 'react';

import './App.css';
import Cycle from './Cycle';
import "./Style.css";
function App() {
  return (
    <div className="head">
      <div className='header'>
        <span>Gallery</span>
      </div>
     
      <Cycle/>
      <br></br>

     <div className='footer'>
       <span>Fullstack Challenge - 2020</span>
     </div>
    </div>
  );
}

export default App;
