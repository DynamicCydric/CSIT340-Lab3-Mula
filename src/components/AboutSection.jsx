import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I am an IT student from Talisay studying at CIT-U. I focus on software engineering, 
        interactive game mechanics, and clean application architecture. My goal is to build 
        responsive, reliable software that users enjoy operating every single day.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Talisay City" />
      </dl>
    </section>
  );
}