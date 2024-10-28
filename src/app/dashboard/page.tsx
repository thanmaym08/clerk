"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Patient {
    _id: string;
    Name: string;
    Age: string;
    Gender: string;
    MedicalCondition: string;
}

const Dashboard: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await fetch('/api/patients');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched patients:', data);

                const formattedData = data.map((patient: any) => ({
                    _id: patient._id,
                    Name: patient.Name,
                    Age: patient.Age,
                    Gender: patient.Gender,
                    MedicalCondition: patient['Medical Condition '].trim(),
                    ImageURL: 'https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg',
                }));
                setPatients(formattedData);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="min-h-90 bg-[#c4e9ec]">
            <main className="py-10">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 rounded">
                    <h1 className="text-3xl font-bold underline top-0 text-center">Dashboard</h1>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-4">Patients List</h2>
                        <div className="bg-[#f3f1fd] shadow rounded-lg">
                            <ul className="divide-y divide-black">
                                {patients.map((patient) => (
                                    <li key={patient._id} className="flex items-center p-4 hover:bg-[#f7f0ec] rounded-lg">

                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-black">{patient.Name}</h3>
                                            <p className="text-[#285b23]">Gender: {patient.Gender}</p>
                                            <p className="text-[#285b23]">Age: {patient.Age}</p>
                                            <p className="text-[#285b23]">Condition: {patient.MedicalCondition}</p>
                                        </div>
                                        <Link href={`/patients/${patient._id}`} legacyBehavior>
                                            <a className="text-blue-600 hover:underline">View Details</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
