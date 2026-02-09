import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--ck-blue-dark)] text-white mt-20">

      {/* Main Footer */}
      <div className="container-ck py-16 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-white">
            CK Medical Systems
          </h4>

          <p className="text-blue-100 text-sm leading-relaxed mb-4">
            Manufacturer & supplier of reliable medical and surgical
            equipment for hospitals, clinics and diagnostic centers.
          </p>

          <p className="text-xs text-blue-200">
            Quality • Compliance • Reliability
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-100">
            Product Categories
          </h4>

          <div className="space-y-2 text-sm text-blue-100">
            <Link href="/products?cat=respiratory" className="block hover:text-white">
              Respiratory Care
            </Link>
            <Link href="/products?cat=monitoring" className="block hover:text-white">
              Patient Monitoring
            </Link>
            <Link href="/products?cat=clinical" className="block hover:text-white">
              Clinical Devices
            </Link>
            <Link href="/products" className="block hover:text-white">
              All Products
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-100">
            Quick Links
          </h4>

          <div className="space-y-2 text-sm text-blue-100">
            <Link href="/" className="block hover:text-white">Home</Link>
            <Link href="/about" className="block hover:text-white">About Us</Link>
            <Link href="/certifications" className="block hover:text-white">Certifications</Link>
            <Link href="/contact" className="block hover:text-white">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-100">
            Contact Details
          </h4>

          <div className="text-sm text-blue-100 space-y-3">

            <p>
              📞 +91-9899366774
            </p>

            <p>
              📧 ckmedicalsystems25@gmail.com
            </p>

            <p className="leading-relaxed">
              400-A, 4th Floor,<br/>
              12 Ajit Singh House,<br/>
              Yusuf Sarai Commercial Complex,<br/>
              New Delhi – 110016
            </p>

          </div>
        </div>

      </div>

      {/* Certification Strip */}
      <div className="border-t border-blue-900">
        <div className="container-ck py-6 flex flex-wrap gap-6 justify-center text-xs text-blue-200">
          <span>ISO Certified</span>
          <span>CE Marked</span>
          <span>GMP Compliant</span>
          <span>Quality Tested Products</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900">
        <div className="container-ck py-6 text-center text-xs text-blue-300">
          © 2026 CK Medical Systems Pvt Ltd — All Rights Reserved
        </div>
      </div>

    </footer>
  );
}
