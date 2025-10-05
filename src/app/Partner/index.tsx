import Image from "next/image";

const Partner = () => {
  return (
    <section className="flex flex-wrap justify-center md:justify-between items-center w-full max-w-[1125px] mx-auto my-10 gap-6 px-4">
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
      <Image src="/partner.png" alt="partner" width={200} height={100} className="object-contain" />
    </section>
  );
};

export default Partner;
