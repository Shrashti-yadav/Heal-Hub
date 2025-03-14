import React , {useContext, useState} from 'react'
import { useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext'
/* see 1:51:43   and 1:56:20 k near */ 

const Doctors = () => {
     const {speciality} = useParams()
     const {filterDoc , setFilterDoc} = useState([])
     const navigate = useNavigate()
     const {doctors} = useContext(AppContext)
     const applyFiter = () => {
         if(speciality){
              setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
         }
         else{
             setFilterDoc(doctors)
         }
     }
     useEffect(() => {
         applyFiter()
     } , [doctors,speciality])

     return(
        <div>
            <p className='text-gray-600'>Browse through the doctors specialist.</p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className=' flex flex-col gap-4 text-sm text-gray-600'>
                    <p onClick={()=>speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
                    <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
                    <p onClick={()=>speciality === 'Dermatolgist' ? navigate('/doctors') : navigate('/doctors/Dermatolgist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatolgist" ? "bg-indigo-100 text-black" : ""}`}>Dermatolgist</p>
                    <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
                    <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
                    <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
                </div>
                <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
                    {
                         filterDoc.map((item, index) => (
                            <div
                              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
                              key={index}
                            >
                              {/* Doctor Image with Proper Box Layout */}
                              <div onClick={() => navigate(`/appointment/${item._id}`)} className="w-full h-100 bg-gray-100 flex items-center justify-center gap-9">
                                <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                              </div>
                  
                              {/* Doctor Details */}
                              <div className="p-4 text-center">
                                <div className="flex items-center justify-center gap-2 text-sm text-green-500">
                                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                  <p>Available</p>
                                </div>
                                <p className=" mt-2 text-lg font-semibold text-gray-900">{item.name}</p>
                                <p className="text-gray-600 text-sm ">{item.speciality}</p>
                              </div>
                            </div>
                          ))
                    }
                </div>
            </div>
        </div>
     )
}
export default Doctors