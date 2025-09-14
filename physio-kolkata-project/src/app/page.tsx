import Image from "next/image";
import Example from './header/header'
import TopSectionContent from "./top-section";
import ServicesCardSection from "./services-section/services-section";
import { Gallery } from "./Gallery/gallery";
import { Footer } from "./footer/footer";
export default function Home() {
  return (
    <div className=" flex flex-col">
      <Example/>
      <TopSectionContent/>
      <ServicesCardSection/>
      <Gallery/>
      <Footer/>
    </div>
  );
}
