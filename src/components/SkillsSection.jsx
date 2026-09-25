import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Kotlin" />
            <SkillTag name="Java" />
            <SkillTag name="JavaScript" />
            <SkillTag name="SQL" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="React" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Android SDK" />
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Android Studio" />
            <SkillTag name="Git" />
            <SkillTag name="Figma" />
            <SkillTag name="Aseprite" />
          </div>
        </div>
      </div>
    </section>
  );
}