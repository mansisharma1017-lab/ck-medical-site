"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const params = useSearchParams();
  const product = params.get("product");

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: product ? `Enquiry for product: ${product}` : "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert("Enquiry sent successfully ✅");

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (err) {
      alert("Failed to send enquiry ❌");
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-ck p-8 space-y-6"
    >

      {/* Heading */}
      <div>
        <h3 className="text-xl font-bold mb-1">
          Send Product Enquiry
        </h3>
        <p className="text-sm text-slate-600">
          Fill the form and our team will respond shortly.
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="text-sm font-semibold">Full Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[var(--ck-blue)]"
        />
      </div>

      {/* Company */}
      <div>
        <label className="text-sm font-semibold">Company / Hospital</label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[var(--ck-blue)]"
        />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="text-sm font-semibold">Email</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[var(--ck-blue)]"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Phone</label>
          <input
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-[var(--ck-blue)]"
          />
        </div>

      </div>

      {/* Message */}
      <div>
        <label className="text-sm font-semibold">Enquiry Details</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-1 h-36 focus:outline-none focus:ring-2 focus:ring-[var(--ck-blue)]"
        />
      </div>

      {/* Button */}
      <button
        disabled={loading}
        className="btn-primary w-full disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>

    </form>
  );
}
