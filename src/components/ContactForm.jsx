"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "emailjs-com";

export default function ContactForm() {

  const params = useSearchParams();
  const product = params.get("product");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: product ? `Enquiry for: ${product}` : ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.send(
      "service_9cjosqc",
      "template_royxssi",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message
      },
      "nfYrIrdYIU3BYIVnx"
    ).then(
      () => {
        alert("Enquiry sent successfully ✅");
        setForm({ name:"", email:"", phone:"", message:"" });
      },
      () => {
        alert("Failed to send ❌");
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        className="w-full border p-3 rounded"
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        className="w-full border p-3 rounded"
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        className="w-full border p-3 rounded"
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your enquiry"
        value={form.message}
        className="w-full border p-3 rounded h-32"
        onChange={handleChange}
        required
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
        Send Enquiry
      </button>

    </form>
  );
}
