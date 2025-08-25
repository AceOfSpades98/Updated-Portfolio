import { useRef } from "react";
import ProjectCard from "./ProjectCard.tsx";
import type { ProjectSection as Section } from "../data/projects";

type Props = { section: Section };

export default function ProjectSection({ section }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const node = wrapperRef.current;
    if (!node) return;
    const amount = Math.round(node.clientWidth * 0.8);
    node.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section>
      <div
        className="scrollButton left"
        role="button"
        onClick={() => scrollByAmount("left")}
      >
        ❮
      </div>

      <div className="appWrapper" id={section.id} ref={wrapperRef}>
        {section.projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <div
        className="scrollButton right"
        role="button"
        onClick={() => scrollByAmount("right")}
      >
        ❯
      </div>
    </section>
  );
}
