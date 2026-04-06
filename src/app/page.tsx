import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhyUs from "@/components/sections/WhyUs";
import PinnedImageBreak from "@/components/sections/PinnedImageBreak";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Process from "@/components/sections/Process";
import ClipImageBreak from "@/components/sections/ClipImageBreak";
import Testimonials from "@/components/sections/Testimonials";
import TeamPreview from "@/components/sections/TeamPreview";
import Pricing from "@/components/sections/Pricing";
import RevealImageBreak from "@/components/sections/RevealImageBreak";
import ContactCta from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <TrustedBy />
      <WhyUs />
      <PinnedImageBreak
        src="/images/team-3.webp"
        alt="Team working together"
      />
      <Services />
      <FeaturedWork />
      <Process />
      <ClipImageBreak
        src="/images/team-1.webp"
        alt="Creative process in action"
      />
      <Testimonials />
      <TeamPreview />
      <Pricing />
      <RevealImageBreak
        src="/images/team-2.webp"
        alt="Office culture and collaboration"
      />
      <ContactCta />
    </div>
  );
}
