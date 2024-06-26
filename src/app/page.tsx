import HeaderSection from "@/components/commons/HeaderSection"
import BuildingBlockSection from "@/components/LandingSection/BuildingBlockSection"
import HeroSection from "@/components/LandingSection/HeroSection"
import ViaGraphQLSection from "@/components/LandingSection/ViaGraphQLSection"
import FeaturesSection from "@/components/LandingSection/FeatuesSection"

const page = () => {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <BuildingBlockSection />
    <ViaGraphQLSection />
    <FeaturesSection />
    </>
  )
}

export default page