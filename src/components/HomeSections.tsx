import Projects from "./Projects";
import ContactCard from "./ContactCard";
import ContactModal from "./ContactModal";

import EducationSection from "./sections/EducationSection";
import IntroSection from "./sections/IntroSection";
import SkillsSection from "./sections/SkillsSection";

import { useState } from "react";

type Props = {
  introTitle?: string;
  introText?: string;
  aboutTitle?: string;
  aboutText?: string;
};

export default function HomeSections({
  introTitle,
  introText,
  aboutTitle,
  aboutText,
}: Props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="introSection">
        <ContactCard onContactClick={() => setIsModalOpen(true)} />
        <IntroSection title={introTitle} text={introText} />
      </div>
      <div className="wrapper">
        <SkillsSection />
      </div>
      <Projects />

      <div className="wrapper">
        
        <EducationSection title={aboutTitle} text={aboutText} />
      </div>

      <ContactModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
