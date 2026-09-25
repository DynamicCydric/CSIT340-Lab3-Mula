import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:mulajamessedric@gmail.com"
          text="mulajamessedric@gmail.com"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/DynamicCydric"
          text="github.com/DynamicCydric"
        />
        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com/in/DynamicCydric"
          text="linkedin.com/in/DynamicCydric"
        />
      </ul>
    </section>
  );
}