import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import { AppContext } from './context/AppContext'; // Adjust path as needed
import Appointment from "./pages/Appointment"; // Ensure correct path
import RelatedDoctors from './components/RelatedDoctors';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />}/>
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;