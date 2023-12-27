import Footer from "@/components/footer";
import DevelopmentServices from "@/components/home/developmentServices";
import Expertise from "@/components/home/expertise";

import HeroSection from "@/components/home/heoSection";
import OfferSection from "@/components/home/offer";
import OurClients from "@/components/home/ourClients";
import OurInfoSection from "@/components/home/ourInfo";
import SevicesOffer from "@/components/home/servicesOffer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <OurInfoSection />
        <DevelopmentServices />
        <OurClients />

      </div>
      {/* <OfferSection /> */}
      {/* <Expertise /> */}
      {/* <SevicesOffer />
   */}
    </div>
  )
}