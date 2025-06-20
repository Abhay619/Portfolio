import {
  SiExpress,
  SiNodedotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import blogworldImg from "../images/blogworld.png";
import driftcastImg from "../images/driftcast.png";
import { BiLogoMongodb } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { IconType } from "react-icons";

// Define types
interface Technology {
  icon: IconType;
  tooltip: string;
}

interface Project {
  id: number;
  name: string;
  Technologies: Technology[];
  description: string;
  imageName: string;
  url: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    name: "DriftCast",
    Technologies: [
      { icon: DiReact, tooltip: "React" },
      { icon: SiTypescript, tooltip: "Typescript" },
      { icon: SiTailwindcss, tooltip: "TailwindCss" },
      { icon: SiShadcnui, tooltip: "ShadCN" },
    ],
    description:
      "Weather forecasting app that visualizes real-time city weather with a interactive rotating globe.",
    imageName: driftcastImg,
    url: "https://drift-cast-theta.vercel.app/",
  },
  {
    id: 2,
    name: "BlogWorld",
    Technologies: [
      { icon: SiNodedotjs, tooltip: "Nodejs" },
      { icon: SiExpress, tooltip: "Expressjs" },
      { icon: BiLogoMongodb, tooltip: "MongoDB" },
    ],
    description:
      "Full-stack blogging platform with user authentication and CRUD operations.",
    imageName: blogworldImg,
    url: "https://blogworld-1hhk.onrender.com/",
  },
];
