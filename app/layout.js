import styles from '../styles/globals.css';
import Header from "../components/Header";

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body>
                <div className="bg-primaryBg w-screen min-h-screen">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    )
}
