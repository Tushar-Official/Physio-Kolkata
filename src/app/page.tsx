"use client";

import Header from "./header/header";
import TopSectionContent from "./top-section";
import ServicesCardSection from "./services-section/services-section";
import { Gallery } from "./Gallery/gallery";
import WhoAreWe from "./WhoAreWe";
import { Footer } from "./footer/footer";
import OurDepartment from "./OurDepartment";
import { FeedbackForm } from "./Feedback/feedback";
import OurLocation from "./OurLocation";
import OurSpecialists from "./OurSpecialists";
import Partner from "./Partner";
import ReviewCarouselHome from "./Reviews/index";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B58259VLT2"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B58259VLT2');
        `}
      </Script>

      {/* Your page content */}
      <Header />
      <TopSectionContent />
      <ServicesCardSection />
      <WhoAreWe />
      <OurDepartment />
      <Partner />
      <OurSpecialists />
      <OurLocation />
      <Gallery />
      <FeedbackForm />
      <ReviewCarouselHome />
      <Footer />
    </div>
  );
}
