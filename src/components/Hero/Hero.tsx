"use client";
import styles from "./hero.module.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariants, childVariants } from "@/utils/motions/heroMotion";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Waves from "../Waves/Waves";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [downloadCount, setDownloadCount] = useState<number>(0);

  const handleType = (count: number) => {
    setDownloadCount(count);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.dataContainer}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className={styles.name} variants={childVariants}>
            Jose Enriquez
          </motion.h1>
          <motion.h2 variants={childVariants}>
            <span className={styles.seniority}>
              <Typewriter
                words={["React", "Web"]}
                loop={false}
                cursor
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                onType={handleType}
              />
            </span>{" "}
            developer
          </motion.h2>
          <motion.a
            href={process.env.NEXT_PUBLIC__RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            variants={childVariants}
          >
            Ver resumen
            <span className={styles.icon}>
              <CallMadeIcon />
            </span>
          </motion.a>
        </motion.div>
      </div>
      <div className={styles.wavesContainer}>
        <Waves />
      </div>
    </div>
  );
};

export default Hero;
