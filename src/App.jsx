import "./App.css";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import {
  DiGithubBadge,
  DiGitMerge,
  DiJava,
  DiJavascript,
  DiMysql,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import {
  FaArrowRightLong,
  FaCss3Alt,
  FaHtml5,
  FaXTwitter,
} from "react-icons/fa6";
import { FiFramer, FiMapPin } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import { LiaNodeJs } from "react-icons/lia";
import { PiFileCpp } from "react-icons/pi";
import { BiLogoMongodb } from "react-icons/bi";
import Footer from "./Common/Footer";
import { useState } from "react";
import Header from "./Common/Header";
import { dp } from "./Data/displaypic";
import { projectData } from "./Data/project-details";
import { Link } from "react-router-dom";
// import { a } from "motion/react-client"
function App() {
  return (
    <div className="cont bg-zinc-950 px-4 pt-8 pb-2 text-zinc-50">
      {/* <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
      <Header />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto max-w-4xl grid grid-flow-dense grid-cols-12 gap-4"
      >
        <HeroBlock />
        <SocialBlock />
        <LocationBlock />
        <AboutBlock />
        <TechStackBlock />
        <ExperienceBlock />
        <ProjectBlock />
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;

// type Props = {
//   className?: string,
// } & MotionProps;

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0.1,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700  p-6 ",
        className
      )}
      {...rest}
    />
  );
};

const HeroBlock = () => {
  const [displayPic, setDisplayPic] = useState(0);
  console.log(dp[displayPic].url);

  return (
    <Block className="col-span-12 md:col-span-6 row-span-2 font-jakarta">
      <img
        src={dp[displayPic].url}
        alt="avatar"
        className="mb-4 size-16 rounded-full cursor-pointer"
        onClick={() => setDisplayPic((displayPic + 1) % 3)}
      />
      <h1 className="mb-12 text-3xl font-medium leading-tight">
        Hi, I'm Abhay.{" "}
        <span className="text-zinc-400">I'm a Fullstack Web Developer</span>
      </h1>
      <motion.a
        href=""
        className="flex items-center gap-1 text-red-300 hover-underline"
      >
        Contact me{" "}
        <motion.span
          initial={{
            rotate: "0deg",
          }}
          whileHover={{
            rotate: "-50deg",
            scale: 1.2,
          }}
          whileTap={{
            rotate: "-50deg",
            scale: 1.2,
          }}
        >
          <FaArrowRightLong className="text-lg" />
        </motion.span>
      </motion.a>
    </Block>
  );
};

const SocialBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        whileTap={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 md:col-span-3  shadow-zinc-500 shadow-sm"
      >
        <a
          href="https://github.com/Abhay619"
          className="grid h-full place-content-center text-4xl text-white"
        >
          <DiGithubBadge />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        whileTap={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 md:col-span-3   shadow-zinc-500 shadow-sm"
      >
        <a
          href="https://www.linkedin.com/in/abhaykumar619/"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        whileTap={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 md:col-span-3  shadow-zinc-500 shadow-sm"
      >
        <a
          href="https://www.instagram.com/meabhayk/"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiInstagram />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        whileTap={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 md:col-span-3 bg-black-500  shadow-zinc-500 shadow-sm"
      >
        <a
          href="https://x.com/AbhayKDhuriya"
          className="grid h-full place-content-center text-4xl text-white"
        >
          <FaXTwitter />
        </a>
      </Block>
    </>
  );
};

const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-3">
      <motion.span
        initial={{
          scale: 1,
          rotateX: "0deg",
          y: 0,
        }}
        whileHover={{
          scale: 1.3,
          y: [0, 10, 10, 2],
        }}
        whileTap={{
          scale: 1.3,
          y: [0, 10, 10, 2],
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <FiMapPin className="text-3xl" />
      </motion.span>
      <p className="text-center text-xl font-semibold text-zinc-400">India</p>
    </Block>
  );
};
const AboutBlock = () => {
  return (
    <Block className="relative col-span-12 flex flex-col items-center gap-4 md:col-span-9 text-xl font-manrope cursor-default">
      <p className="opacity-1">
        I like learning and building cool tech.{" "}
        <span className="text-zinc-400">
          I create sleek, fast, and responsive websites using React, Tailwind
          CSS, and Node.js. This stack lets me bring ideas to life—from clean UI
          to powerful backend.
        </span>
      </p>
    </Block>
  );
};
const TechStackBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col text-left gap-8 md:col-span-12 text-xl">
      <h2 className="text-4xl font-semibold">My Tech Stack<span className="inline-block animate-blink">_</span></h2>
      <div className="flex flex-col gap-1 cursor-pointer">
        <Marquee
          pauseOnHover
          autoFill
          gradient
          gradientColor="rgb(10 10 12 / var(--tw-bg-opacity, 1))"
        >
          <div className="flex p-2 gap-2 items-center">
            <DiGithubBadge className="text-3xl" /> Github
          </div>
          <div className="flex p-2 gap-2 items-center">
            <LiaNodeJs className="text-3xl" /> Node
          </div>
          <div className="flex p-2 gap-2 items-center">
            <SiExpress className="text-3xl" /> Express
          </div>
          <div className="flex p-2 gap-2 items-center">
            <DiReact className="text-3xl" /> React
          </div>
          <div className="flex p-2 gap-2 items-center">
            <FaHtml5 className="text-3xl" /> HTML
          </div>
          <div className="flex p-2 gap-2 items-center">
            <FaCss3Alt className="text-3xl" /> CSS
          </div>
          <div className="flex p-2 gap-2 items-center">
            <DiJavascript className="text-3xl" /> JavaScript
          </div>
        </Marquee>
        <Marquee
          pauseOnHover
          autoFill
          gradient
          gradientColor="rgb(10 10 12 / var(--tw-bg-opacity, 1))"
          delay={1}
        >
          <div className="flex p-2 gap-2 items-center">
            <PiFileCpp className="text-3xl" /> C++
          </div>
          <div className="flex p-2 gap-2 items-center">
            <DiPython className="text-3xl" /> Python
          </div>
          <div className="flex p-2 gap-2 items-center">
            <FiFramer className="text-3xl" /> Motion
          </div>
          <div className="flex p-2 gap-2 items-center">
            <DiGitMerge className="text-3xl" /> Git
          </div>
          <div className="flex p-2 gap-2 items-center">
            <DiMysql className="text-3xl" /> MySQL
          </div>
          <div className="flex p-2 gap-2 items-center">
            <BiLogoMongodb className="text-3xl" /> MongoDB
          </div>
          <div className="flex p-2 gap-2 items-center">
            <DiJava className="text-3xl" /> Java
          </div>
        </Marquee>
      </div>
    </Block>
  );
};
const ExperienceBlock = () => {
  return (
    <Block className="relative col-span-12 flex flex-col text-left gap-8 md:col-span-12 text-xl font-jakarta">
      <h2 className="text-4xl font-semibold">Experience<span className="inline-block animate-blink">_</span></h2>

      <div className="relative experience flex flex-col gap-12 p-4">
        <div className="milestones flex flex-col gap-1">
          <p className="text-2xl font-semibold">Open Source</p>
          <p className="text-zinc-400 text-xs">March,2025 - Present</p>
          <p className="text-lg">
            I actively try to contribute to Open Source on my{" "}
            <a href="https://github.com/Abhay619" className="text-green-500">
              Github.
            </a>{" "}
          </p>
        </div>
        <div className="milestones flex flex-col gap-1">
          <p className="text-zinc-400">HCL Tech</p>
          <p className="text-2xl font-semibold">Graduate Trainee</p>
          <p className="text-zinc-400 text-xs">January,2024 - Feburary,2025</p>
          <p className="text-lg">
            Mitigating Windows vulnerabilities and patching servers to resolve
            high-risks, enhance system security and compliance.
          </p>
          <p></p>
        </div>
      </div>
    </Block>
  );
};
const ProjectBlock = () => {
  const arrowVariants = {
    initial: {
      rotate: 0,
      scale: 1,
    },
    hover: {
      rotate: -50,
      scale: 1.2,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    tap:{
      rotate: -50,
      scale: 1.2,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    }
  };
  console.log(projectData.Technologies);
  return (
    <Block className="col-span-12 flex flex-col text-left items-center gap-4 md:col-span-12 text-xl rounded-lg font-jakarta">
      <h2 className="text-4xl font-semibold self-start">Projects<span className="inline-block animate-blink">_</span></h2>
      <span className="text-zinc-400 font-marope">
         Here’s what I’ve been building — ideas turned into interactive, functional apps using my favorite tech stack.
        </span>
      <div className="flex flex-col  gap-8 my-6">
        {projectData.slice(0,2).map((v, i) => {
          return (
            <a href={v.url}>
              <motion.div
                className="group relative w-full h-72 md:h-[400px] rounded-xl overflow-hidden bg-black/10 shadow-inner"
                style={{
                  boxShadow: "inset 5px 5px 40px rgba(255, 255, 255, 0.4)",
                }}
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: {},
                  hover: {},
                }}
              >
                {/* Background Image */}
                <img
                  src={v.imageName}
                  alt="project background"
                  className="absolute inset-0 w-full h-full object-fill opacity-60 group-hover:scale-105 transition-transform duration-300 "
                />

                {/* Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 z-10" />

                {/* Content */}
                <div className="relative z-20 p-6 flex flex-col justify-end h-full">
                  <h2 className="text-2xl font-semibold mb-2 flex items-center gap-1">
                    {v.name}
                    <motion.span variants={arrowVariants} className="font-bold">
                      <FaArrowRightLong className="text-lg font-bold" />
                    </motion.span>
                  </h2>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-2 relative">
                    {v.Technologies.map((Icon, i) => (
                      <span className="bg-black w-10 justify-center text-md py-1 rounded flex items-center  ">
                        <Icon />
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-zinc-400 text-wrap">
                    {v.description}
                  </p>
                </div>
              </motion.div>
            </a>
          );
        })}
        <Link to={'/projects'} className="text-2xl font-semibold text-zinc-500 hover:text-zinc-200">More...</Link>
      </div>
    </Block>
  );
};
