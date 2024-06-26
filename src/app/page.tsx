import HeaderSection from "@/components/commons/HeaderSection"
import BuildingBlockSection from "@/components/LandingSection/BuildingBlockSection"
import HeroSection from "@/components/LandingSection/HeroSection"
import ViaGraphQLSection from "@/components/LandingSection/ViaGraphQLSection"
import FeaturesSection from "@/components/LandingSection/FeatuesSection"
import OurMissonSection from '@/components/LandingSection/OurMissonSection'
import TestimonialSection from '@/components/LandingSection/TestimonialSection'
import OurRoadmap from '@/components/LandingSection/OurRoadmap'
import PricingSection from '@/components/LandingSection/PricingSection'

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
    <OurRoadmap />
    {/* <PricingSection /> */}
    </>
  )
}

export default page