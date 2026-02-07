import Image from "next/image";

export default function CertStrip() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">

        <Image src="/cert/iso.png" width={120} height={60} alt="ISO"/>
        <Image src="/cert/gmp.png" width={120} height={60} alt="GMP"/>
        <Image src="/cert/ce.png" width={120} height={60} alt="CE"/>
        <Image src="/cert/gem.png" width={120} height={60} alt="GeM"/>

      </div>
    </section>
  );
}
