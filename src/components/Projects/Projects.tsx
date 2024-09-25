"use client";
import styles from "./projects.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projectVariants, childVariants } from "@/utils/motions/projectsMotion";
import CardsList from "../CardList/CardsList";

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px" });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textContainer}
          variants={projectVariants}
          ref={ref}
          initial="initial"
          animate={isInView && "animate"}
        >
          <motion.h1 className={styles.title} variants={childVariants}>
            Proyectos
          </motion.h1>
          <motion.h2 variants={childVariants}>
            Ver mis últimos proyectos
          </motion.h2>
        </motion.div>
        <div className={styles.projectContainer}>
          <CardsList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
