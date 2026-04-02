import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhyUs from "@/components/sections/WhyUs";
import ImageBreak from "@/components/sections/ImageBreak";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import TeamPreview from "@/components/sections/TeamPreview";
import Pricing from "@/components/sections/Pricing";
import ContactCta from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <TrustedBy />
      <WhyUs />
      <ImageBreak
        src="https://placehold.co/1920x1080/e2e8f0/1c1917"
        alt="Team working together"
      />
      <Services />
      <FeaturedWork />
      <Process />
      <ImageBreak
        src="https://placehold.co/1920x1080/d6d3d1/1c1917"
        alt="Creative process in action"
      />
      <Testimonials />
      <TeamPreview />
      <Pricing />
      <ImageBreak
        src="https://placehold.co/1920x1080/cbd5e1/1c1917"
        alt="Office culture and collaboration"
      />
      <ContactCta />
    </div>
  );
}
