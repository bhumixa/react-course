import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="h1"/>
      <About />
      {/* <TextForm heading="Enter Text" ></TextForm> */}
    </>
  );
}

export default App;
