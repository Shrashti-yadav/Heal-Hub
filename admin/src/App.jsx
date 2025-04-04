import React ,{useContext} from 'react'
import Login from './pages/Login'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AllApointments from './pages/Admin/AllApointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import {Routes} from 'react-router-dom';
const App = () => {
  const {aToken}=useContext(AdminContext)

  return  aToken?(
    <div className='bg-[#F8F9FD]'>
      
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/'elements={<></>}/>
          <Route path='/admin-dashboard'elements={<Dashboard/>}/>
          <Route path='/all-appointments'elements={<AllApointments/>}/>
          <Route path='/add-doctor'elements={<AddDoctor/>}/>
          <Route path='/doctor-list'elements={<DoctorsList/>}/>
        </Routes>
      </div>
    </div>
  ):(
    <>
      <Login/>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
