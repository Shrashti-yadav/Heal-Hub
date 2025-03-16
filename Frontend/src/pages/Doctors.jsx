import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (doctors && Array.isArray(doctors)) {
      setFilterDoc(speciality ? doctors.filter(doc => doc.speciality === speciality) : doctors);
    }
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctor's specialists.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* Speciality List */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'].map((spec) => (
            <p
              key={spec}
              onClick={() => navigate(speciality === spec ? '/doctors' : `/doctors/${spec}`)}
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === spec ? 'bg-indigo-100 text-black' : ''
              }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctor List */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6'>
          {filterDoc.length > 0 ? (
            filterDoc.map((item) => (
              <div
                key={item._id}
                className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105'
              >
                <div onClick={() => navigate(`/appointment/${item._id}`)} className='w-full h-100 bg-gray-100 flex items-center justify-center gap-9'>
                  <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
                </div>

                <div className='p-4 text-center'>
                  <div className='flex items-center justify-center gap-2 text-sm text-green-500'>
                    <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                    <p>Available</p>
                  </div>
                  <p className='mt-2 text-lg font-semibold text-gray-900'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p className='text-gray-500'>No doctors available for this speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
