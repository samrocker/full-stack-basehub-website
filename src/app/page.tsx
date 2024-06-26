import HeaderSection from "@/components/commons/HeaderSection"
import BuildingBlockSection from "@/components/LandingSection/BuildingBlockSection"
import HeroSection from "@/components/LandingSection/HeroSection"
import ViaGraphQLSection from "@/components/LandingSection/ViaGraphQLSection"
import FeaturesSection from "@/components/LandingSection/FeatuesSection"
import OurMissonSection from '@/components/LandingSection/OurMissonSection'
import TestimonialSection from '@/components/LandingSection/TestimonialSection'

const page = () => {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <BuildingBlockSection />
    <ViaGraphQLSection />
    <FeaturesSection />
    <OurMissonSection />
    <TestimonialSection />
    </>
  )
}

export default page