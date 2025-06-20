import React from 'react'
import { useState } from "react";
import "./header.css";
import { motion } from "motion/react";
import { MdClose } from "react-icons/md";
import { GoHome, GoProject } from "react-icons/go";
import {
  FaRegPenToSquare,
} from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
// import logo from "../images/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
      const sidebarVariants = {
        open: {
          x: 0,
          transition: { type: "spring", stiffness: 300, damping: 30 },
        },
        closed: {
          x: "-100%",
          transition: { type: "spring", stiffness: 300, damping: 30 },
        },
      };
  return (
     <header className="border-b border-b-zinc-600 mb-12">
          <nav className="text-white font-jakarta mx-auto max-w-6xl site-nav flex flex-row justify-center sm:justify-between relative items-center">
            {/* <a href="" className="nav-a p-3 text-xl hidden sm:block font-manrope">
              AK.DEV
            </a> */}
            <button className="text-zinc-600 absolute sm:hidden top-4 left-4 text-2xl" onClick={()=> setIsOpen(true)}> <FiMenu /> </button>
           
            <Link to={'/'}  className="nav-a p-3 text-lg  font-manrope">
                <img src="logo.png" width="62"
                height="40"
                />
            </Link>
    
            <ul className="nav-ul hidden sm:flex px-4">
              <motion.li
                whileHover={{
                  scale: 1.3,
                  color: "lightblue",
                }}
                whileTap={{ scale: 1.3, color: "lightblue" }}
                transition={{
                  ease: "easeInOut",
                }}
                className="nav-li"
              >
                <Link to={'/'}>Home</Link>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.3,
                  color: "lightgreen",
                }}
                whileTap={{ scale: 1.3, color: "lightgreen" }}
                transition={{
                  ease: "easeInOut",
                }}
                className="nav-li"
              >
                <Link to={'/projects'}>Projects</Link>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.3,
                  color: "pink",
                }}
                whileTap={{ scale: 1.3, color: "pink" }}
                transition={{
                  ease: "easeInOut",
                }}
                className="nav-li"
              >
                <Link to={'/contact'}>Contact</Link>
              </motion.li>
            </ul>
    
            {/* Mobile Side-Nav */}
            <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={sidebarVariants}
            className={`fixed left-0 sm:hidden w-full h-screen bg-zinc-900 top-0 bottom-0 z-20 px-1 text-2xl`}>
              <div className="border-b relative border-zinc-700 grid grid-flow-col mt-4 text-left mb-10">
                <img
                  src="https://api.dicebear.com/9.x/lorelei/svg?seed=Andrea"
                  alt="avatar"
                  className="mb-4 size-20 cursor-pointer inline-block rounded-full col-span-1 row-span-2"
                />
                <h3 className="text-3xl col-span-10 text-left self-end">Hello,</h3>
                <p className="col-span-10 text-sm text-zinc-600">I'm Abhay</p>
                <button className="col-span-1 text-zinc-600 text-2xl" onClick={()=> setIsOpen(false)}>
                  <MdClose />
                </button>
              </div>
    
              <ul className="nav-ul sm:hidden px-1 text-xl">
                <motion.li
                  whileTap={{ scale: 1.1, color: "lightblue" }}
                  transition={{
                    ease: "easeInOut",
                  }}
                  className="nav-li"
                >
                  <Link to={'/'} className="flex p-2 gap-6 items-center text-zinc-500">
                    <GoHome className="text-2xl" />
                    <span className="text-white">Home</span>
                  </Link>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 1.1, color: "lightgreen" }}
                  transition={{
                    ease: "easeInOut",
                  }}
                  className="nav-li mt-3"
                >
                  <Link to={'/projects'} className="flex p-2 gap-6 items-center text-zinc-500">
                    <GoProject className="text-2xl" />
                    <span className="text-white">Projects</span>
                    
                  </Link>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 1.1, color: "pink" }}
                  transition={{
                    ease: "easeInOut",
                  }}
                  className="nav-li mt-3"
                >
                  <Link to={'/contact'} className="flex p-2 gap-6 items-center text-zinc-500">
                    <FaRegPenToSquare className="text-xl" />
                    <span className="text-white">Contact</span>
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            {/* Mobile Side-Nav End*/}
          </nav>
        </header>
  )
}

export default Header