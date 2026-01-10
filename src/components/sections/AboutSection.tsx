type Props = {
  title?: string;
  text?: string;
};

export default function AboutSection({
  title = "A Little About Me",
  text = "Outside of coding, you'll often find me cooking, weightlifting, hiking, reading, or gaming — anything that keeps me learning and active. I'm always open to new opportunities, collaborations, or just connecting with fellow developers. Feel free to reach out!",
}: Props) {
  return (
    <section className="contentContainer">
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
}
