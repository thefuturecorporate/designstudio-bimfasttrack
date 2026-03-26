import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import WhyBIMSection from "@/components/home/WhyBIMSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import SoftwareSection from "@/components/home/SoftwareSection";
import CareerSection from "@/components/home/CareerSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import EligibilitySection from "@/components/home/EligibilitySection";
import CTASection from "@/components/home/CTASection";
import LocationsPreview from "@/components/home/LocationsPreview";
import FAQSection from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyBIMSection />
      <WorkflowSection />
      <SoftwareSection />
      <CareerSection />
      <ProjectsSection />
      <EligibilitySection />
      <CTASection />
      <LocationsPreview />
      <FAQSection />
    </>
  );
}
