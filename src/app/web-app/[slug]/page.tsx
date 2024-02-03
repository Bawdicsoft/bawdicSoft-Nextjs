// import FullStackSection from "@/components/services/blockChain/nft/nftMarketPlace/fullStackServices";
// import HelpSectionsCustomWeb from "@/components/services/webApplication/customWebApp/helpCustomWeb";
// import HeroSectionCustomWeb from "@/components/services/webApplication/customWebApp/heroCustomWeb";
// import IntegratSectionCustomWeb from "@/components/services/webApplication/customWebApp/integrateCustomWeb";
// import NeedCustomWeb from "@/components/services/webApplication/customWebApp/needCustomWeb";
// import OfferSectionCustomWeb from "@/components/services/webApplication/customWebApp/offerCustomWeb";
// import BenifiteFullStack from "@/components/services/webApplication/fullStackDevelopment/benifitesFullStack";
// import HeroSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/heroSectionFullStack";
// import BenifiteNftSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/benifitesResponsiveWebApp";
// import FullStackSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/fullStackServices";
// import FullStackServiceSection from "@/components/services/webApplication/fullStackDevelopment/fullStackServices";
// import HeroSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/heroSection";
// import OurServicesSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/ourServices";
// import PartnerChoiceSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/partnerChoice";
// import TechnologySectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/technology";
// import TokenSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/token";
// import WhyUsSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/whyUs";
// import HelpSectionsWebDesign from "@/components/services/webApplication/webDesign/helpWebDesign";
// import HeroSectionWebDesign from "@/components/services/webApplication/webDesign/heroSectionWebDesign";
// import WhyUsSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/whyUsFullStack";
// import IntegratSectionWebDesign from "@/components/services/webApplication/webDesign/integrateWebDesign";
// import NeedWebDesign from "@/components/services/webApplication/webDesign/needWebDesign";
// import OfferSectionWebDesign from "@/components/services/webApplication/webDesign/offerWebDesign";
// import OurServicesSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/ourServicesFullStack";
// import PartnerChoiceSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/partnerChoiceFullStack";
// import TechnologySectionFullStack from "@/components/services/webApplication/fullStackDevelopment/technologyFullStack";
// import TokenSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/tokenFullStack";

import FamousBlockChainSectionCustomeWebApp from "@/components/services/webApplication/customWebApp/famousBlockchain";
import GenerationAISectionCustomeWebApp from "@/components/services/webApplication/customWebApp/generationAiMachineLearning";
import HeroSectionCustomWeb from "@/components/services/webApplication/customWebApp/heroCustomWeb";
import LanguageModelSectionCustomWebApp from "@/components/services/webApplication/customWebApp/languageModelMachineLearning";
import MasterMachineSectionCustomWebApp from "@/components/services/webApplication/customWebApp/msMachineLearning";
import PartnerChoiceSectionCustomWebApp from "@/components/services/webApplication/customWebApp/partnerChoice";
import TalkSectionCustomWebApp from "@/components/services/webApplication/customWebApp/talkSection";
import FamousBlockChainSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/famousBlockchain";
import GenerationAISectionFullStack from "@/components/services/webApplication/fullStackDevelopment/generationAiMachineLearning";
import HeroSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/heroSectionFullStack";
import LanguageModelSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/languageModelMachineLearning";
import MasterMachineSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/msMachineLearning";
import PartnerChoiceSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/partnerChoice";
import TalkSectionFullStack from "@/components/services/webApplication/fullStackDevelopment/talkSection";
import FamousBlockChainSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/famousBlockchain";
import GenerationAISectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/generationAiMachineLearning";
import HeroSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/heroSection";
import LanguageModelSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/languageModelMachineLearning";
import MasterMachineSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/msMachineLearning";
import PartnerChoiceSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/partnerChoice";
import TalkSectionResponsiveWebApp from "@/components/services/webApplication/responsiveWebApp/talkSection";
import FamousBlockChainSectionWebDesign from "@/components/services/webApplication/webDesign/famousBlockchain";
import GenerationAISectionWebDesign from "@/components/services/webApplication/webDesign/generationAiMachineLearning";
import HeroSectionWebDesign from "@/components/services/webApplication/webDesign/heroSectionWebDesign";
import LanguageModelSectionWebDesign from "@/components/services/webApplication/webDesign/languageModelMachineLearning";
import MasterMachineSectionWebDesign from "@/components/services/webApplication/webDesign/msMachineLearning";
import PartnerChoiceSectionWebDesign from "@/components/services/webApplication/webDesign/partnerChoice";
import TalkSectionWebDesign from "@/components/services/webApplication/webDesign/talkSection";

export default function WebApp({ params }: { params: { slug: string } }) {
  const param = params.slug;
  return (
    <div>
      {/* web Design */}
      {param === "web-design" && (
        <div>
          <HeroSectionWebDesign />
          <MasterMachineSectionWebDesign />
          <LanguageModelSectionWebDesign />
          <GenerationAISectionWebDesign />
          <TalkSectionWebDesign />
          <PartnerChoiceSectionWebDesign />
          <FamousBlockChainSectionWebDesign />
        </div>
      )}
      {/* responsive web Design */}
      {param === "responsive-web-app" && (
        <div>
          <HeroSectionResponsiveWebApp />

          <MasterMachineSectionResponsiveWebApp />
          <LanguageModelSectionResponsiveWebApp />
          <GenerationAISectionResponsiveWebApp />
          <TalkSectionResponsiveWebApp />
          <PartnerChoiceSectionResponsiveWebApp />
          <FamousBlockChainSectionResponsiveWebApp />
        </div>
      )}
      {/* custom web App */}
      {param === "custom-web-app" && (
        <div>
          <HeroSectionCustomWeb />
          <MasterMachineSectionCustomWebApp />
          <LanguageModelSectionCustomWebApp />
          <GenerationAISectionCustomeWebApp />
          <TalkSectionCustomWebApp />
          <PartnerChoiceSectionCustomWebApp />
          <FamousBlockChainSectionCustomeWebApp />
        </div>
      )}
      {/* full-stack-development */}
      {param === "full-stack-development" && (
        <div>
          <HeroSectionFullStack />
          <HeroSectionFullStack />
          <MasterMachineSectionFullStack />
          <LanguageModelSectionFullStack />
          <GenerationAISectionFullStack />
          <TalkSectionFullStack />
          <PartnerChoiceSectionFullStack />
          <FamousBlockChainSectionFullStack />
        </div>
      )}
    </div>
  );
}
