import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, changeMode] = useState("light")

  const toggleMode = () => {
    if (mode === 'light') {
      changeMode("dark")
    } else {
      changeMode("light")
    }
  }
  return (
    <>
      <Navbar title="h1" mode={mode} toggleMode={toggleMode}/>
      {/* <About /> */}
      <TextForm heading="Enter Text" mode={mode}  />
      {/* <div className="container">
        <button onClick={changeMode} className="btn btn-primary" type="button"  >
          Toggle Theme
        </button>
      </div> */}

    </>
  );
}

export default App;
