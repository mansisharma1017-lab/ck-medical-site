"use client";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            Contact Us
          </h1>

          {/* 2 column layout */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT — FORM */}
            <div className="bg-white shadow rounded-xl p-8">
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>

            {/* RIGHT — CONTACT INFO */}
            <div className="space-y-6">

              <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <h3 className="font-bold text-xl mb-4">
                  Contact Details
                </h3>

                <p className="text-gray-700 mb-3">
                  📞 <strong>Phone:</strong><br/>
                  +91-9899366774
                </p>

                <p className="text-gray-700 mb-3">
                  📧 <strong>Email:</strong><br/>
                  ckmedicalsystems25@gmail.com
                </p>

                <p className="text-gray-700">
                  📍 <strong>Address:</strong><br/>
                  400-A, 4th Floor,<br/>
                  12 Ajit Singh House,<br/>
                  Yusuf Sarai Commercial Complex,<br/>
                  New Delhi 110016
                </p>
              </div>

              <p className="text-gray-600 mb-10">
                Have a product enquiry or partnership request?
                Fill the form and our team will contact you.
              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}

      