import Image from "next/image";

const Partner = () => {
return (
  <section className="w-full max-w-[1125px] mx-auto my-10 px-4">
    <h2 className="text-2xl font-semibold text-center mb-6">Our Partners</h2>
    <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
    </div>
  </section>
);
};

export default Partner;
