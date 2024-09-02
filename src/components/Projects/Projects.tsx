"use client";
import styles from "./projects.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { textVariants } from "@/utils/motions/projectsMotion";
import CardsList from "../CardList/CardsList";

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px" });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textContainer}
          variants={textVariants}
          ref={ref}
          animate={isInView && "animate"}
        >
          <h1 className={styles.title}>Proyectos</h1>
          <h2>Ver mis últimos proyectos</h2>
        </motion.div>
        <div className={styles.projectContainer}>
          <CardsList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
