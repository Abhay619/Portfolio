import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { projectData } from "../Data/project-details";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="cont bg-zinc-950 px-4 pt-8 pb-2 text-zinc-50">
      <Header/>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto max-w-4xl grid grid-flow-dense grid-cols-12 gap-4"
      >
        <ProjectBlock/>
      </motion.div>
      
      
      <Footer/>
      </div>
  )
}

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
        "col-span-4 rounded-lg  p-6 ",
        className
      )}
      {...rest}
    />
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
    <Block className="col-span-12 flex w-full flex-col text-left items-center gap-4 md:col-span-12 text-xl rounded-lg font-jakarta">
      <h2 className="text-4xl font-semibold self-start">Projects<span className="inline-block animate-blink">_</span></h2>
      <span className="text-zinc-400 font-marope">
         Here’s what I’ve been building — ideas turned into interactive, functional apps using my favorite tech stack.
        </span>
      <div className="flex flex-col w-full gap-8 my-6">
        {projectData.map((v, i) => {
          return (
            <a href="">
              <motion.div
                className="group relative w-full h-72 md:h-[450px] rounded-xl overflow-hidden bg-black/10 shadow-inner"
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
                  className="absolute  w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300 "
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
      </div>
    </Block>
  );
};