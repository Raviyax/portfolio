import { ISkillListItem, SkillLevel } from "@/types";
import { title } from "process";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      {
      title: "C",
      level: SkillLevel.Intermediate,
      icon: "/skills/c.svg",
      },
      {
        title: "php",
        level: SkillLevel.Intermediate,
        icon: "/skills/php.svg",
      },
      {
        title: "Java",
        level: SkillLevel.Begginer,
        icon: "/skills/java.svg",
      },

    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "Next UI",
        level: SkillLevel.Intermediate,
        icon: "/skills/nextui.svg",
        
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/tailwind.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },

    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Codeigniter",
        level: SkillLevel.Intermediate,
        icon: "/skills/ci.svg",
      },
      {
        title: "Spring Boot",
        level: SkillLevel.Intermediate,
        icon: "/skills/spring.svg",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Begginer,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps/VCS",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Begginer,
        icon: "/skills/docker.png",
      },
      {
        title: "Oracal VM",
        level: SkillLevel.Begginer,
        icon: "/skills/oracle.svg",
      },
      {
        title: "Linux",
        level: SkillLevel.Begginer,
        icon: "/skills/linux.svg",
      },


      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },

      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
