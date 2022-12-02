import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const [mode, setmode] = useState('light');
  const toggelmode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is on", "success")
      document.title = 'TEXTUTILITY -DARK MODE'
      setInterval(() => {
        document.title = "TextUtil is amazing"
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtil"
      }, 1500);

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TEXTUTILITY -Light MODE'
    }

  }
  const removeclassList=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const changeColor=(cls)=>{
    removeclassList();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
        
  }



  return (
    <>
      <Router>
        <Navbar title='TEXTUTILITY' aboutus='About' mode={mode} toggelmode={toggelmode} changeColor={changeColor} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>}/>
            <Route exact path='/' element={<Textform showAlert={showAlert} heading="ENTER TEXT" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;




