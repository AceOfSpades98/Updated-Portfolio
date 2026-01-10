type Props = {
  title?: string;
  text?: string;
};

export default function IntroSection({
  title = "Hi, I'm Noah",
  text = "I am a full-stack developer with a strength in back-end/database integration. I take pride in making my apps intuitive and user-friendly!",
}: Props) {
  return (
    <section className="contentContainer">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
}
