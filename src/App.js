import React, { useState } from "react";
import "./App.css";
// import About from './components/About';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

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
      document.title = "Textutils - DarkMode";
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
      document.title = "Textutils - LightMode";
    }
  };

  return (
    <>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
