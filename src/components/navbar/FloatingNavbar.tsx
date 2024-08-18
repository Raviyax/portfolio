"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

const FloatingNavbar = ({ className }: { className?: string }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.25] rounded-full bg-[var(--dialogColor50)] backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        <Link
          href="/#home"
          className={cn(
            "relative items-center flex space-x-1 text-neutral-50 hover:text-neutral-300"
          )}
        >
          <span className=" sm:block text-sm/6 lg:text-base">About</span>
        </Link>

        <Link
          href="/#qualifications"
          className={cn(
            "relative items-center flex space-x-1 text-neutral-50 hover:text-neutral-300"
          )}
        >
          <span className=" sm:block text-sm/6 lg:text-base">
            Qualifications
          </span>
        </Link>

        <Link
          href="/#skills"
          className={cn(
            "relative items-center flex space-x-1 text-neutral-50 hover:text-neutral-300"
          )}
        >
          <span className=" sm:block text-sm/6 lg:text-base">Skills</span>
        </Link>

        <Link
          href="/#projects"
          className={cn(
            "relative items-center flex space-x-1 text-neutral-50 hover:text-neutral-300"
          )}
        >
          <span className=" sm:block text-sm/6 lg:text-base">Projects</span>
        </Link>

        <Link
          href="/#contact"
          className={cn(
            "relative items-center flex space-x-1 text-neutral-50 hover:text-neutral-300"
          )}
        >
          <span className=" sm:block text-sm/6 lg:text-base">Contact</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
