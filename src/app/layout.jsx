import "./globals.css";
import Navigation from "@/components/Header/Navigation";
import Providers from "./lib";
 import { ToastContainer } from 'react-toastify';
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Keen keeper",
  description: "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
        <Navigation />
         <ToastContainer position="top-center"/>
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
