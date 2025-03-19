import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Rooms from './Components/Rooms';
import Amenities from './Components/Amenities';
import Contact from './Components/Contact';
import AboutDetails from './Components/AboutDetails';
import RoomsDetails from './Components/RoomsDetails';
import AmenitiesDetails from './Components/AmenitiesDetails';

function App() {

  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
          <Routes>
            <Route exact path="/about" element={<AboutDetails />} />
            <Route exact path="/rooms" element={<RoomsDetails />} />
            <Route exact path="/amenities" element={<AmenitiesDetails />} />
          </Routes>
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
