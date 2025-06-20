import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import Header from "../components/header";
import Footer from "../components/Footer";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import Orb from '../components/Orb';

export default function Projects() {
  return (
    <div className="cont bg-zinc-950 px-4 pt-8 pb-2 text-zinc-50 ">
      <Header />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto max-w-5xl "
      >
        <ContactBlock />
      </motion.div>

      <Footer />
    </div>
  );
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
      className={twMerge("col-span-4 rounded-lg  p-6 ", className)}
      {...rest}
    />
  );
};
const ContactBlock = () => {
  return (
    <Block className=" grid max-w-3xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 font-montserrat justify-around min-h-screen items-center">
      <div className="flex flex-col gap-4 items-start ">
        <h2 className="text-4xl md:text-7xl font-semibold self-start mb-2">
          Reach <span className="text-zinc-400">Me</span>.
        </h2>
        <p className="text-2xl font-jakarta text-blue-500">I would love to hear from you!!</p>
        <div className="flex flex-row gap-6 items-center font-jakarta">
          <p className="border p-2 rounded-full"><FiMail/></p>
          <p className="font-poppins">abhayk6190@gmail.com</p>
        </div>
        <div className="flex flex-row gap-6">
          <p className="border p-2 rounded-full"><IoCallOutline/></p>
          <p className="font-poppins text-xl">+91 8303889702</p>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
  />
  
      </div>
    </Block>
  );
};
