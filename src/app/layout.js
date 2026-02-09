// src/app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CK Medical | Surgical & Medical Device Manufacturer",
  description:
    "CK Medical is a trusted manufacturer and supplier of high-quality medical and surgical devices. Precision, quality and global standards.",
  keywords: "medical devices, surgical instruments, CK Medical, healthcare manufacturing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
