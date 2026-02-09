"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[88vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Blue Corporate Overlay */}
      <div className="absolute inset-0 bg-[var(--ck-blue)]/75" />

      <div className="relative container-ck grid md:grid-cols-2 gap-10 items-center text-white">

        {/* ===== Left Content ===== */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-widest text-sm mb-4 text-blue-200 font-semibold"
          >
            CK Medical Systems
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Advanced Medical Devices
            <br />
            <span className="text-blue-200">
              Built for Clinical Precision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-blue-50 mb-8 max-w-xl"
          >
            We manufacture and supply high-quality medical and surgical
            equipment trusted by hospitals, diagnostic centers and healthcare
            professionals across multiple specialties.
          </motion.p>

          {/* ===== CTA Buttons ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/products" className="btn-primary">
              Explore Products
            </Link>

            <Link href="/contact" className="btn-outline bg-white/10 border-white text-white hover:bg-white hover:text-[var(--ck-blue)]">
              Send Enquiry
            </Link>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-sm text-blue-100"
          >
            ✔ Quality Tested &nbsp; • &nbsp; ✔ Industry Compliant &nbsp; • &nbsp; ✔ Reliable Support
          </motion.div>

        </div>

        {/* ===== Right Side Spacer / Future Image ===== */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
