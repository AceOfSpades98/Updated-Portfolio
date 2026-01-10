import AboutSection from "./sections/AboutSection";
import IntroSection from "./sections/IntroSection";
import SkillsSection from "./sections/SkillsSection";

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
  return (
    <>
      <IntroSection title={introTitle} text={introText} />
      <SkillsSection />
      <AboutSection title={aboutTitle} text={aboutText} />
    </>
  );
}
