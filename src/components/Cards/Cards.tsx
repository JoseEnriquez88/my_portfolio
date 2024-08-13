"use client";
import styles from "./cardslist.module.css";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { Project, ProjectsData } from "@/utils/types";
import {
  cardsContainerVariants,
  cardsVariants,
} from "@/utils/motions/cardsMotion";
import projects from "@/utils/projects.json";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const Content: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px" });

  // const projectData: ProjectsData = projects as ProjectsData;

  return (
    <motion.div
      className={styles.container}
      variants={cardsContainerVariants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      {projects.data.map((project, index) => (
        <motion.div
          className={styles.cardContainer}
          key={index}
          variants={cardsVariants}
        >
          <div className={styles.card}>
            {index % 2 !== 0 ? (
              <>
                <div className={styles.frontContent}>
                  <Image
                    src={project.image}
                    alt="image"
                    className={styles.image}
                    width={500}
                    height={350}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.heading}>{project.name}</p>
                  <p className={styles.type}>{project.type}</p>
                  <article className={styles.article}>
                    {project.description}
                  </article>
                  <div className={styles.iconContainer}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoButton}
                    >
                      Ver más
                      <ArrowForwardIcon />
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.deployButton}
                      >
                        Deploy
                        <InsertLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.content}>
                  <p className={styles.heading}>{project.name}</p>
                  <p className={styles.type}>{project.type}</p>
                  <article className={styles.article}>
                    {project.description}
                  </article>
                  <div className={styles.iconContainer}>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoButton}
                    >
                      Ver más
                      <ArrowForwardIcon />
                    </a>
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.deployButton}
                      >
                        Deploy
                        <InsertLinkIcon />
                      </a>
                    )}
                  </div>
                </div>
                <div className={styles.frontContent}>
                  <Image
                    src={project.image}
                    alt="image"
                    className={styles.image}
                    width={500}
                    height={350}
                  />
                </div>
              </>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Content;
