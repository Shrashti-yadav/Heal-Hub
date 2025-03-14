import React from 'react'
import Navbar from './components/Navbar';
import { Route ,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
// import Appointment from './pages/Appointment';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      {/* <Route path='/appointment/:docId' element={<Appointment/>} /> */}
    </Routes>
    </div>
  )
}

export default App
