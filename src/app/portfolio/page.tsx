import HeroSection from "@/components/portFolio/heroSection";
// import OurWorks from "@/components/portFolio/ourWorks";
import ProductServices from "@/components/portFolio/porductPortFolio";
import PortFolioSection from "@/components/portFolio/portFoliSection";
import { FC } from "react"
interface portFolioProps { }

const PortFolio: FC<portFolioProps> = () => {
    return (
        <div>
            <HeroSection />

            <div className="max-w-7xl mx-auto">
                <ProductServices />
                {/* <OurWorks /> */}
                <PortFolioSection />
            </div>
        </div>)
}
export default PortFolio;