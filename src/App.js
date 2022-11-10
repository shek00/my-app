
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextFrom from './componets/TextFrom';
import React, { useState} from 'react';
import Alert from './componets/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState (null);

    const showAlert = (message, type) =>{
        setAlert({
          msg : message,
          type : type
        })
        setTimeout( () =>{
          setAlert(null);
        },1000)
    }
    const toggleMode = () =>{
        if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has been enable", "success");
         // '#212529'
        }
        else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Dark mode has been diable", "warning");
        }
    }
  return (
    <>
    <Router>
      <Navbar title="TextAnalizer" aboutText="About us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path ="/about" element= {<About/>} />
             
            
            <Route exact path="/" element= {<TextFrom showAlert={showAlert} heading="Enter The Text To Analize"  mode={mode}/>}/>
              
          
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
