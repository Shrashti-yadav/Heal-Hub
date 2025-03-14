import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Appointment from './pages/Appointment'; // Uncomment only if needed

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/appointment/:docId' element={<Appointment />} /> */}
      </Routes>
    </div>
  );
};

export default App;
