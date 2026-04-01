import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import WhyUs from "@/components/sections/WhyUs";
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
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <TeamPreview />
      <Pricing />
      <ContactCta />
    </div>
  );
}
