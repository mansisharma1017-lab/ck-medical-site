"use client";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="py-20">
        <div className="space-y-3 text-gray-700">
          <p><strong>Phone:</strong> +91-9899366774</p>
          <p><strong>Email:</strong> ckmedicalsystems25@gmail.com</p>
          <p><strong>Address:</strong><br/>
             400-A, 4th Floor, 12 Ajit Singh House,<br/>
             Yusuf Sarai Commercial Complex,<br/>
             New Delhi 110016
          </p>

          <p className="text-gray-600 mb-10">
            Have a product enquiry or partnership request?
            Fill the form and our team will contact you.
          </p>

          <Suspense fallback={<div>Loading...</div>}>
           <ContactForm />
          </Suspense>


        </div>
      </section>

      <Footer />
    </>
  );
}
