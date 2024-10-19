
import Navbar from './components/navbar';

import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <html lang="en">
            <body>
                <header>
                    <Navbar /> {/* Navbar now includes authentication buttons */}
                </header>
                <main>{children}</main>
            </body>
        </html>

    );
}
