import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, changeMode] = useState("light")

  const toggleMode = () => {
    if (mode === 'light') {
      changeMode("dark")
      document.body.style.backgroundColor = 'grey'
    } else {
      changeMode("light")
      document.body.style.backgroundColor = 'white'
    }
  }


  return (
    <>



      <BrowserRouter>
        <Navbar title="h1" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter Text" mode={mode} />}>
            
          </Route>
          <Route path="About" element={<About />} />
        </Routes>
      </BrowserRouter>

      {/* <Routes>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <TextForm heading="Enter Text" mode={mode} />
        </Route>
      </Routes> */}


      {/* <About /> */}

      {/* <div className="container">
        <button onClick={changeMode} className="btn btn-primary" type="button"  >
          Toggle Theme
        </button>
      </div> */}

    </>
  );
}

export default App;
