import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Certifications() {
  return (
    <>
      <Navbar />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-bold">
            Certifications & Compliance
          </h1>

          <div className="grid md:grid-cols-4 gap-10 items-center">

            <Image src="/cert/iso.png" width={160} height={80} alt="ISO"/>
            <Image src="/cert/ce.png" width={160} height={80} alt="CE"/>
            <Image src="/cert/gmp.png" width={160} height={80} alt="GMP"/>
            <Image src="/cert/gem.png" width={160} height={80} alt="GeM"/>

          </div>

          <p className="mt-10 text-gray-700 leading-relaxed">
            Our supplied products comply with recognized quality
            and safety standards including ISO 9001:2015, GMP,
            IEC and CE certifications where applicable.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
