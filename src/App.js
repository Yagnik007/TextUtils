import React, { useState } from "react";
import "./App.css";
import About from './components/About';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#740c16";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Textutils - DarkMode";
      // setInterval(()=>{
      //   document.title = "Textutils is Amazing";
      // }, 2000);
      // setInterval(()=>{
      //   document.title = "Install Textutils now!";
      // }, 1500);
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Textutils - LightMode";
    }
  };

  return (
    <>
    <Router basename="/TextUtils">
        <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
            <Route exact path="/about" element={<About mode = {mode}/>}/> 
            <Route exact path="/" element = {<TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>}/> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
