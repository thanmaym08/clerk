import Head from 'next/head';

export default function Home() {
    return (
        <div>

            <Head>
                <title>Doctor Information Page</title>
                <meta name="description" content="Medical information layout" />
            </Head>

            <main className="rounded-lg shadow-lg bg-[#98c1d9] p-10 min-h-screen">
                <h1 className='flex font-bold text-3xl justify-center text-center text-black underline'>Doctor Details</h1>
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
                    </div>
                    {/* Personal Info */}
                    <div className="mb-6">
                        <p><strong>Full name:</strong>KA.Paul, MD, FACC</p>
                        <p><strong>DOB:</strong> Mar 2, 1970</p>
                        <p><strong>Gender:</strong> Male</p>
                        <p><strong>Specialization:</strong> Cardiology</p>
                        <p><strong>Qualifications:</strong>

                            Medical Degree: Doctor of Medicine (MD), Johns Hopkins University School of Medicine
                            Residency: Internal Medicine Residency, Massachusetts General Hospital
                            Fellowship: Cardiology Fellowship, Cleveland Clinic
                            Board Certification: Certified in Cardiology by the American Board of Internal Medicine (ABIM)
                            Professional Memberships: Fellow of the American College of Cardiology (FACC)
                            Experience: 15 years of practice specializing in interventional cardiology </p>



                    </div>

                    {/* Right Side */}
                    <div className="w-2/3 ml-10 bg-[#fffaff] p-6 overflow-y-auto max-h-[600px] relative rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4 text-bold underline">Patient Medical Details</h3>


                        <div
                            className="absolute top-0 right-0 mt-2 mr-2 border border-red-400 p-2 text-sm bg-[#edf2f4] shadow rounded-lg">

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}