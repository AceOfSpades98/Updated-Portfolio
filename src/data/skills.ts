export type Skill = { name: string; icon: string; alt?: string };

export const SKILLS_BY_CATEGORY: Record<string, Skill[]> = {
  Languages: [
    { name: "Python", icon: "images/Icons/python-icon.png" },
    { name: "Java", icon: "images/Icons/java-programming-language-icon.png"},
    { name: "HTML", icon: "images/Icons/html-icon.png" },
    { name: "CSS", icon: "images/Icons/css-icon.png" },
    { name: "JavaScript", icon: "images/Icons/js-icon.png" },
    { name: "TypeScript", icon: "images/Icons/typescript-programming-language-icon.png" },
  ],
  Frameworks: [
    { name: "React", icon: "images/Icons/react-js-icon.png" },
    { name: "Express JS", icon: "images/Icons/express-js-icon.png" },
    { name: "Node JS", icon: "images/Icons/node-js-icon.png" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "images/Icons/postgresql-icon.png" },
    { name: "MySQL", icon: "images/Icons/mysql-icon.png" },
    { name: "MongoDB", icon: "images/Icons/mongodb-icon.png" },
  ],
  Tools: [
    { name: "Postman", icon: "images/Icons/postman-icon.png" },
    { name: "AWS", icon: "images/Icons/aws-icon.png" },
    { name: "Ubuntu", icon: "images/Icons/ubuntu-color-icon.png" },
    { name: "Figma", icon: "images/Icons/figma-icon.png" },
    { name: "Docker", icon: "images/Icons/docker-icon.png" },
  ],
};
