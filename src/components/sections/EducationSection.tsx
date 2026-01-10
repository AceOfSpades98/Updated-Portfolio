type Props = {
  title?: string;
  text?: string;
};

export default function EducationSection({
  title = "Education & Credentials",
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
}: Props) {
  return (
    <section className="contentContainer">
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
}
