import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="ScoutSenseAI"
          description="A mobile application built with MVP architecture and vertical slicing for sports scouting."
          tech="Kotlin · Android SDK · XML"
          link="https://github.com/DynamicCydric"
        />
        <ProjectCard
          year="2026"
          title="Meme-mon: Brainrot Arena"
          description="A 2D Java battle arena game featuring custom pixel artwork, sound effects, and battle managers."
          tech="Java · Aseprite · Swing"
          link="https://github.com/DynamicCydric"
        />
        <ProjectCard
          year="2026"
          title="Portfolio in React"
          description="A modular single-page developer portfolio migrated from vanilla HTML into reusable React components."
          tech="React · Tailwind CSS · Vite"
          link="https://github.com/DynamicCydric/CSIT340-Lab3-Mula"
        />
        <ProjectCard
          year="2025"
          title="VendorVault"
          description="A relational database management schema and interface designed for vendor operations."
          tech="MySQL · Relational DB"
          link="https://github.com/DynamicCydric"
        />
      </div>
    </section>
  );
}