import Head from 'next/head';

export default function Home() {
    return (
        <div>

            <Head>
                <title>Medical Information Page</title>
                <meta name="description" content="Medical information layout" />
            </Head>

            <main className="rounded-lg shadow-lg bg-[#98c1d9] p-10 min-h-screen">
                <h1 className='flex font-bold text-3xl justify-center text-center text-black underline'>Patient Details</h1>
                <div className="flex">
                    {/* Left Side */}
                    <div className="w-1/3 bg-[#fffaff] p-6 rounded-lg shadow-md">
                        {/* Photo */}
                        <div className="border-2 rounded-lg border-[#285b23] w-48 h-48 flex items-center justify-center">
                            <div className="mb-6">
                                <img src="C:\Users\Hp\Desktop\code\mani-clerk\public\patinet.png" alt="photo"
                                    className="w-24 h-24 rounded-full object-cover" />
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="mb-6">
                            <p><strong>Name:</strong> Gireesh</p>
                            <p><strong>DOB:</strong> Mar 2, 1970</p>
                            <p><strong>Gender:</strong> Male</p>
                            <p><strong>Age:</strong> 54</p>
                            <p><strong>Blood Type:</strong> O+</p>
                        </div>

                        {/* Notes */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Notes</h3>
                            <div className="border border-red-400 bg-[#edf2f4] p-4 h-32 rounded-lg">
                                <p>No significant allergies or issues reported.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-2/3 ml-10 bg-[#fffaff] p-6 overflow-y-auto max-h-[600px] relative rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4 text-bold underline">Medical Details</h3>

                        {/* Medical Information */}
                        <div className="space-y-4">
                            <p><strong>Medical Condition:</strong> Chronic Back Pain</p>
                            <p><strong>Medicine:</strong> Ibuprofen 200mg as needed</p>
                            <p><strong>Notes:</strong> Physical therapy recommended; avoid heavy lifting.</p>
                            <p><strong>Medication History:</strong> Persistent since 2017.</p>

                            <p><strong>Medical Condition:</strong> Anemia</p>
                            <p><strong>Medicine:</strong> Ferrous sulfate 325mg</p>
                            <p><strong>Notes:</strong> Take with vitamin C for absorption.</p>
                            <p><strong>Medication History:</strong> Recently diagnosed, ongoing management.</p>

                            <p><strong>Medical Condition:</strong> GERD (Gastroesophageal Reflux Disease)</p>
                            <p><strong>Medicine:</strong> Omeprazole 20mg</p>
                            <p><strong>Notes:</strong> Avoid spicy foods and eat small, frequent meals.</p>
                            <p><strong>Medication History:</strong> Symptoms managed since 2019.</p>
                            {/* Add more details here to ensure scrolling */}
                        </div>

                        {/* Last Checkup Date - Positioned in the top-right corner */}
                        <div
                            className="absolute top-0 right-0 mt-2 mr-2 border border-red-400 p-2 text-sm bg-[#edf2f4] shadow rounded-lg">
                            <strong>Last Checkup Date:</strong> March 15, 2024
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}