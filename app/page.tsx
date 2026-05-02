import { ContactCTA } from "@/sections/ContactCTA";
import { Hero } from "@/sections/Hero";
import { ProjectsPreview } from "@/sections/ProjectsPreview";
import { SolutionsGrid } from "@/sections/SolutionsGrid";
import { WhyUs } from "@/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SolutionsGrid />
      <WhyUs />
      <ProjectsPreview />
      <ContactCTA />
    </>
  );
}
