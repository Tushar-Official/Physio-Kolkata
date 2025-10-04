"use client";

import Example from "./header/header";
import TopSectionContent from "./top-section";
import ServicesCardSection from "./services-section/services-section";
import { Gallery } from "./Gallery/gallery";
import WhoAreWe from "./WhoAreWe";
import { Footer } from "./footer/footer";
import OurDepartment from "./OurDepartment";
import OurLocation from "./OurLocation";
import OurSpecialists from "./OurSpecialists";
import Partner from "./Partner";
export default function Home() {
  return (
    <div className=" flex flex-col">
      <Example />
      <TopSectionContent />
      <ServicesCardSection />
      <WhoAreWe />
      <OurDepartment />
      <Partner />
      <OurSpecialists />
      <Gallery />
      <OurLocation />
      <Footer />
    </div>
  );
}
