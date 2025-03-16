import { AppContext } from '../context/AppContext';
import React, { useContext, useState, useEffect } from 'react';

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);
    const [relDocs, setRelDocs] = useState([]);

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter(
                (doc) => doc.speciality === speciality && doc._id !== docId
            );
            setRelDocs(doctorsData);
            console.log("Filtered Doctors: ", doctorsData); // ✅ Debugging
        }
    }, [doctors, speciality, docId]);

    return (
        <div className="mt-10 px-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Doctors</h2>

            {relDocs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {relDocs.map((doctor) => (
                        <div key={doctor._id} className="border rounded-lg p-4 shadow-md bg-white">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h3 className="text-lg font-medium mt-2">{doctor.name}</h3>
                            <p className="text-sm text-gray-600">{doctor.speciality}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No related doctors found.</p>
            )}
        </div>
    );
};

export default RelatedDoctors;
