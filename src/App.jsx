import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Rooms from './Components/Rooms';
import Amenities from './Components/Amenities';
import Contact from './Components/Contact';

function App() {

  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
          <Home />
          <About />
          <Rooms />
          <Amenities />
          <Contact />
      </div> 
    </>
  )
}

export default App
