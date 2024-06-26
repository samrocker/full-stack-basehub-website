import HeaderSection from "@/components/commons/HeaderSection"
import BuildingBlockSection from "@/components/LandingSection/BuildingBlockSection"
import HeroSection from "@/components/LandingSection/HeroSection"
import ViaGraphQLSection from "@/components/LandingSection/ViaGraphQLSection"
import WorkBetter from "@/components/LandingSection/WorkBetter"

const page = () => {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <BuildingBlockSection />
    <ViaGraphQLSection />
    <WorkBetter />
    </>
  )
}

export default page