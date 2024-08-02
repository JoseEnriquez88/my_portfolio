"use client";
import styles from "./about.module.css";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  titleVariants,
  articleVariants,
  socialsVariants,
} from "@/utils/motions/aboutMotion";
import socials from "@/utils/socials";
import StackSlider from "../StackSlider/StackSlider";
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutContainer}>
          <div className={styles.subContainer}>
            <div className={styles.textContainer}>
              <motion.h1
                className={styles.about}
                variants={titleVariants}
                initial="initial"
                animate={isInView && "animate"}
                ref={ref}
              >
                Sobre mí
              </motion.h1>
              <div className={styles.bioContainer}>
                <motion.article
                  className={styles.text}
                  variants={articleVariants}
                  initial="initial"
                  animate={isInView && "animate"}
                >
                  Soy un desarrollador web con fuertes habilidades en HTML, CSS
                  y JavaScript, lo que me permite crear interfaces atractivas.
                  Además, tengo experiencia desarrolando con tecnologías como
                  React, React Native, Next y Redux/Toolkit. Del lado del
                  servidor, utilizo Express y bases de datos relacionales como
                  SQL, Prisma y PostgreSQL para garantizar un rendimiento
                  eficiente y una gestión de datos eficaz.
                </motion.article>
                <motion.div
                  className={styles.socialsContainer}
                  variants={socialsVariants}
                  initial="initial"
                  animate={isInView && "animate"}
                >
                  <a
                    href={socials.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                  >
                    <FaGithub className={styles.icon} />
                  </a>
                  <a
                    href={socials.Linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                  >
                    <FaLinkedin className={styles.icon} />
                  </a>
                  <a
                    href={socials.Discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Discord"
                  >
                    <FaDiscord className={styles.icon} />
                  </a>
                  <a
                    href={socials.Mail}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Email"
                  >
                    <MdEmail className={styles.icon} />
                  </a>
                </motion.div>
              </div>
            </div>
            <motion.div
              className={styles.imageContainer}
              variants={articleVariants}
              initial="initial"
              animate={isInView && "animate"}
            >
              <Image
                src="/SVG/about.png"
                alt="image"
                className={styles.image}
                width={350}
                height={350}
              />
            </motion.div>
          </div>
          <div className={styles.stackContainer}>
            <StackSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
