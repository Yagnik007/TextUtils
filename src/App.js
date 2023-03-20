import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const[mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light') 
    {
      setMode('dark');
      document.body.style.backgroundColor = '#740c16';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm mode = {mode} toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;


