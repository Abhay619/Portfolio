import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

export default function Projects() {
  return (
    <div className="cont bg-zinc-950 px-4 pt-8 pb-2 text-zinc-50">
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
    <Block className=" flex w-full flex-col-2 md:flex-row text-left gap-5 text-xl rounded-lg font-cormorant justify-around">
      <div className="flex flex-col gap-4 items-start col-span-1">
        <h2 className="text-6xl font-semibold self-start mb-2">
          Reach <span className="text-zinc-400">Me</span>.
        </h2>
        <p className="text-2xl font-jakarta">I would love to hear from you!!</p>
        <div className="flex flex-row gap-6 items-center font-jakarta">
          <p className="border p-2 rounded-full"><FiMail/></p>
          <p className="font-poppins">abhayk6190@gmail.com</p>
        </div>
        <div className="flex flex-row gap-6">
          <p className="border p-2 rounded-full"><IoCallOutline/></p>
          <p className="font-poppins">+91 8303889702</p>
        </div>
      </div>
      <div className="min-h-[200px] w-[220px] border col-span-1 "></div>
    </Block>
  );
};
