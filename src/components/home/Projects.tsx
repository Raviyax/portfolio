"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { useSwipeable } from "react-swipeable";
import Fade from "./ui/transition/fade";
import ResponsiveBox from "../core/ResponsiveBox";
import { IoLogoWhatsapp } from "react-icons/io";

interface Project {
  imageSrc: string;
  altText: string;
  company: string;
  title: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const numProjects = projects.length;
  const [positionIndexes, setPositionIndexes] = useState(
    Array.from({ length: numProjects }, (_, i) => i)
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % numProjects
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + numProjects) % numProjects
      );
      return updatedIndexes;
    });
  };

  const calculatePositions = (index: number) => {
    const centerIndex = Math.floor(numProjects / 2);
    const offset = index - centerIndex;
    const xPosition = `${offset * 60}%`;
    const scale = 1 - Math.abs(offset) * 0.2;
    const zIndex = numProjects - Math.abs(offset);
    return { x: xPosition, scale, zIndex };
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleBack,
    onSwipedRight: handleNext,
    trackMouse: true,
  });

  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id="projects"
    >
      <section className="py-4 bg-white dark:bg-[var(--bgColor)] bg-[var(--bgColor)] w-full">
        <div className="max-w-2xl mx-auto text-center mt-4">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            My Projects
          </h2>
        </div>

        <Fade opacity={0.8}>
          <div
            className="relative h-screen flex items-center justify-center w-full overflow-hidden "
            {...handlers}
          >
            <div
              className="absolute inset-0 w-1/2 h-full"
              onClick={handleNext}
              style={{ cursor: "pointer", zIndex: 999 }}
            />
            <div
              className="absolute inset-0 w-1/2 h-full left-1/2 "
              onClick={handleBack}
              style={{ cursor: "pointer", zIndex: 999 }}
            />

            {projects.map((project, index) => {
              const position = calculatePositions(positionIndexes[index]);
              return (
                <motion.div
                  key={index}
                  className="rounded-[12px] absolute w-[80%] sm:w-[55%] md:w-[35%] "
                  initial={{ x: "0%", scale: 1, zIndex: 5 }}
                  animate={position}
                  transition={{ duration: 0.5 }}
                  // style={{ width: "35%" }}
                >
                  <Card
                    isBlurred
                    className=" bg-[var(--dialogColor)] max-w-[610px] w-full border border border-[var(--primaryColor)] rounded-xl"
                    shadow="lg"
                  >
                    <CardBody>
                      <img
                        className="h-auto max-w-lg rounded-xl m-3 border-1 border-gray-200 dark:border-gray-700"
                        src={project.imageSrc}
                        alt={project.altText}
                      />

                      <div className="space-y-4 flex flex-col items-center justify-center p-4">
                        <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white mt-3 text-center">
                          {project.title}
                        </h3>
                        <span className="bg-purple-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-xl dark:bg-[var(--primaryColor)] dark:text-white">
                          {project.company}
                        </span>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 text-center">
                          {project.description}
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Fade>
      </section>
    </ResponsiveBox>
  );
};

export default Projects;
