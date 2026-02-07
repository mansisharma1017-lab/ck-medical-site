export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h4 className="font-bold mb-3">CK Medical Systems</h4>
          <p className="text-gray-400">
            Powering Healthcare with Reliable Technology
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <p className="text-gray-400">Home</p>
          <p className="text-gray-400">Products</p>
          <p className="text-gray-400">Contact</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Contact</h4>

          <p className="text-gray-400 mb-2">
            📞 +91-9899366774
          </p>

          <p className="text-gray-400 mb-2">
            📧 ckmedicalsystems25@gmail.com
          </p>

          <p className="text-gray-400">
              400-A, 4th Floor,<br/>
              12 Ajit Singh House,<br/>
              Yusuf Sarai Commercial Complex,<br/>
              New Delhi 110016
          </p>
        </div>


        <div>
          <h4 className="font-bold mb-3">Certifications</h4>
          <p className="text-gray-400">ISO</p>
          <p className="text-gray-400">CE</p>
          <p className="text-gray-400">GMP</p>
        </div>


      </div>

      <div className="text-center text-gray-500 pb-6">
        © 2026 CK Medical Systems Pvt Ltd
      </div>
    </footer>
  );
}
