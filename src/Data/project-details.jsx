
import { SiExpress, SiNodedotjs, SiShadcnui, SiTailwindcss, SiTypescript } from "react-icons/si";
import blogworldImg from "../images/blogworld.png"
import driftcastImg from "../images/driftcast.png";
import { BiLogoMongodb } from "react-icons/bi";
import { DiReact } from "react-icons/di";
export let projectData = [
  {
    id: 1,
    name: "DriftCast",
    Technologies: [DiReact, SiTypescript, SiTailwindcss, SiShadcnui],
    description: "Weather forecasting app that visualizes real-time city weather with a interactive rotating globe.",
    imageName: driftcastImg,
    url:"https://drift-cast-theta.vercel.app/"
  },
  {
    id: 2,
    name: "BlogWorld",
    Technologies: [SiNodedotjs, SiExpress, BiLogoMongodb],
    description: "Full-stack blogging platform with user authentication and CRUD operations.",
    imageName: blogworldImg,
    url:"https://blogworld-1hhk.onrender.com/"
  },
];
