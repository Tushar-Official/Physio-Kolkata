import Image from "next/image";

const Partner = () => {
  return (
    <section className="flex flex-row w-[1125px] mx-auto my-10 justify-between">
      <Image src="/partner.png" alt="partner" width={200} height={100} />
      <Image src="/partner.png" alt="partner" width={200} height={100} />
      <Image src="/partner.png" alt="partner" width={200} height={100} />
      <Image src="/partner.png" alt="partner" width={200} height={100} />
      <Image src="/partner.png" alt="partner" width={200} height={100} />
    </section>
  );
};

export default Partner;
