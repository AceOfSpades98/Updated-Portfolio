export type Education = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  image?: string;
  href?: string;
  skills: string[]
};

const base = import.meta.env.BASE_URL;

export const education = [
  {
    title: "Diploma in Software Development",
    subtitle: "Keyin College",
    date: "2024 – 2025",
    description:
      "Full-stack software development program covering front-end and back-end development, DevOps principles, data structures, algorithms, and UI/UX design.",
    image: `${base}images/Education/keyin-logo.jpg`,
    skills: ["Front-end", "Back-end", "DevOps", "DSA", "UI/UX"]
  },
  {
    title: "Introduction to Generative AI",
    subtitle: "Keyin College",
    date: "2024",
    description:
      "Introductory course exploring generative AI concepts, use cases, and foundational cloud-based AI services.",
    image: `${base}images/Education/keyin-logo.jpg`,
    skills: ["Generative AI", "Prompt Engineering", "AI Fundamentals"]
  },
  {
    title: "AWS Cloud Foundations",
    subtitle: "AWS Academy",
    date: "2024",
    description:
      "Completed AWS Cloud Foundations, covering core AWS services, cloud concepts, security, architecture, and hands-on labs.",
    image: `${base}images/Education/cloud-foundations.png`,
    href: "https://www.credly.com/badges/f53fc281-3307-4bd4-8d3c-8dc8340814da",
    skills: ["Cloud Computing", "IAM", "EC2", "S3"]
  },
  {
    title: "AWS Cloud Development",
    subtitle: "AWS Academy",
    date: "2025",
    description:
      "Focused on building, deploying, and managing applications in AWS using development best practices and associated labs.",
    image: `${base}images/Education/cloud-developing.png`,
    href: "https://www.credly.com/badges/dd0984dd-fc38-4a02-aa16-01e3e3ef9e3b",
    skills: ["Cloud Development", "APIs", "Deployment", "CI/CD"]
  },
  {
    title: "AWS Cloud Architecting",
    subtitle: "AWS Academy",
    date: "2025",
    description:
      "Covered AWS architectural best practices, scalability, reliability, and cost-optimized cloud design through hands-on labs.",
    image: `${base}images/Education/cloud-architecting.png`,
    href: "https://www.credly.com/badges/61c3ff7d-30d2-4dea-9157-8a7d3bfc68d9/",
    skills: ["Architecture", "Scalability", "High Availability", "Cost Optimization"]
  },
];
