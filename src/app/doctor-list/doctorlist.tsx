"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Doctor {
    _id: string;
    name: string;
    age: string;
    specialization: string;
    ImageURL?: string; // Add ImageURL as an optional property
}

const Dashboard: React.FC = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('/api/doctors');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Doctor[] = await response.json();
                console.log('Fetched doctors:', data);

                const formattedData = data.map((doctor) => ({
                    _id: doctor._id,
                    name: doctor.name,
                    age: doctor.age,
                    specialization: doctor.specialization.trim(),
                    ImageURL: doctor.ImageURL || 'https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg', // Default image URL
                }));
                setDoctors(formattedData);
            } catch (err) {
                // Assert the error type
                if (err instanceof Error) {
                    console.error('Error fetching doctors:', err);
                    setError(err.message);
                } else {
                    console.error('Unexpected error:', err);
                    setError('An unexpected error occurred.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <div className="min-h-90 bg-[#c4e9ec]">
            <main className="py-10">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 rounded">
                    <h1 className="text-3xl font-bold underline top-0 text-center">Dashboard</h1>
                    <div className="mt-6">
                        <h2 className="text-2xl font-bold mb-4">Doctors List</h2>
                        {loading && <p>Loading doctors...</p>}
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="bg-[#f3f1fd] shadow rounded-lg">
                            <ul className="divide-y divide-black">
                                {doctors.map((doctor) => (
                                    <li key={doctor._id} className="flex items-center p-4 hover:bg-[#f7f0ec] rounded-lg">
                                        <img
                                            src={doctor.ImageURL}
                                            alt={`Profile picture of Dr. ${doctor.name}`}
                                            className="w-16 h-16 rounded-full mr-4"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-black">{doctor.name}</h3>
                                            <p className="text-[#285b23]">Age: {doctor.age}</p>
                                            <p className="text-[#285b23]">Specialization: {doctor.specialization}</p>
                                        </div>
                                        <Link href={`/doctors/${doctor._id}`} legacyBehavior>
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