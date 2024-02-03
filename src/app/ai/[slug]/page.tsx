import FamousBlockChainSectionComputerVision from "@/components/services/artificialIntiligiance/computerVisionServices/famousBlockchain";
import GenerationAISectionComputerVision from "@/components/services/artificialIntiligiance/computerVisionServices/generationAiComputerVision";
import HeroSectionComputerVision from "@/components/services/artificialIntiligiance/computerVisionServices/heroSectionComputerVision";
import LanguageModelSectionComputerVision from "@/components/services/artificialIntiligiance/computerVisionServices/languageModelComputerVision";
import MasterMachineSectionComputerVision from "@/components/services/artificialIntiligiance/computerVisionServices/msMachineComputerVision";
import PartnerChoiceSectionComputerVision from "@/components/services/artificialIntiligiance/computerVisionServices/partnerChoice";
import TalkSectionComputerVision from "@/components/services/artificialIntiligiance/computerVisionServices/talkSection";
import FamousBlockChainSectionCustomeAi from "@/components/services/artificialIntiligiance/customeAiSolution/famousBlockchain";
import GenerationAISectionCustomeAi from "@/components/services/artificialIntiligiance/customeAiSolution/generationAiCustomAi";
import HeroSectionCustomAi from "@/components/services/artificialIntiligiance/customeAiSolution/heroSectionCustomAi";
import LanguageModelSectionCustomAi from "@/components/services/artificialIntiligiance/customeAiSolution/languageModelCustomAi";
import MasterMachineSectionCustomeAI from "@/components/services/artificialIntiligiance/customeAiSolution/msMachineCustomeAi";
import PartnerChoiceSectionCustomAi from "@/components/services/artificialIntiligiance/customeAiSolution/partnerChoice";
import TalkSectionCustomAi from "@/components/services/artificialIntiligiance/customeAiSolution/talkSection";
import FamousBlockChainSectionMachineLearning from "@/components/services/artificialIntiligiance/machineLearning/famousBlockchain";
import GenerationAISectionMachineLearning from "@/components/services/artificialIntiligiance/machineLearning/generationAiMachineLearning";
import HeroSectionMachineLearning from "@/components/services/artificialIntiligiance/machineLearning/heroSectionMachineLearning";
import LanguageModelSectionMachineLearning from "@/components/services/artificialIntiligiance/machineLearning/languageModelMachineLearning";
import MasterMachineSectionMachineLearning from "@/components/services/artificialIntiligiance/machineLearning/msMachineLearning";
import PartnerChoiceSectionMahcineLearning from "@/components/services/artificialIntiligiance/machineLearning/partnerChoice";
import TalkSectionMachineLearning from "@/components/services/artificialIntiligiance/machineLearning/talkSection";
import FamousBlockChainSectionNaturalLanguage from "@/components/services/artificialIntiligiance/naturalLanguageProcessing/famousBlockchain";
import GenerationAISectionNaturalLanguage from "@/components/services/artificialIntiligiance/naturalLanguageProcessing/generationAiNaturalLanguage";
import HeroSectionNaturalLanguage from "@/components/services/artificialIntiligiance/naturalLanguageProcessing/heroSectionNaturalLanguage";
import LanguageModelSectionNaturalLanguage from "@/components/services/artificialIntiligiance/naturalLanguageProcessing/languageModelNaturalLanguage";
import MasterMachineSectionNaturalLanguage from "@/components/services/artificialIntiligiance/naturalLanguageProcessing/msMachineNaturalLanguage";
import PartnerChoiceSectionNaturalLanguage from "@/components/services/artificialIntiligiance/naturalLanguageProcessing/partnerChoice";
import TalkSectionNaturalLanguage from "@/components/services/artificialIntiligiance/naturalLanguageProcessing/talkSection";

export default function AI({ params }: { params: { slug: string } }) {
  const param = params.slug;
  return (
    <div>
      {/* web Design */}
      {param === "custom-ai-solution" && (
        <div>
          <HeroSectionCustomAi />
          <MasterMachineSectionCustomeAI />
          <LanguageModelSectionCustomAi />
          <GenerationAISectionCustomeAi />
          <TalkSectionCustomAi />
          <PartnerChoiceSectionCustomAi />
          <FamousBlockChainSectionCustomeAi />
        </div>
      )}
      {/* responsive web Design */}
      {param === "machine-learning" && (
        <div>
          <HeroSectionMachineLearning />
          <MasterMachineSectionMachineLearning />
          <LanguageModelSectionMachineLearning />
          <GenerationAISectionMachineLearning />
          <TalkSectionMachineLearning />
          <PartnerChoiceSectionMahcineLearning />
          <FamousBlockChainSectionMachineLearning />
        </div>
      )}
      {/* custom web App */}
      {param === "natural-language-processing" && (
        <div>
          <HeroSectionNaturalLanguage />
          <MasterMachineSectionNaturalLanguage />
          <LanguageModelSectionNaturalLanguage />
          <GenerationAISectionNaturalLanguage />
          <TalkSectionNaturalLanguage />
          <PartnerChoiceSectionNaturalLanguage />
          <FamousBlockChainSectionNaturalLanguage />
        </div>
      )}
      {/* full-stack-development */}
      {param === "computer-vision-services" && (
        <div>
          <HeroSectionComputerVision />
          <MasterMachineSectionComputerVision />
          <LanguageModelSectionComputerVision />
          <GenerationAISectionComputerVision />
          <TalkSectionComputerVision />
          <PartnerChoiceSectionComputerVision />
          <FamousBlockChainSectionComputerVision />
        </div>
      )}
    </div>
  );
}
