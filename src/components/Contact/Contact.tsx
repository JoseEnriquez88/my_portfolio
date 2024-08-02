"use client";
import styles from "./contact.module.css";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { titleVariants } from "@/utils/motions/contactMotion";
import Form from "../Form/Form";
import ItemsContact from "../ItemsContact/ItemsContact";
import Footer from "../Footer/Footer";
import BottomNav from "../NavbarBottom/BottomNav";

const Contact: React.FC = () => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px" });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const hideFooter = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    hideFooter();
    window.addEventListener("resize", hideFooter);

    return () => {
      window.removeEventListener("resize", hideFooter);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <motion.h1
            className={styles.title}
            variants={titleVariants}
            initial="initial"
            animate={isInView && "animate"}
            ref={ref}
          >
            Contacta conmigo
          </motion.h1>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.itemsContainer}>
            <ItemsContact />
          </div>
          <div className={styles.formContainer}>
            <Form />
          </div>
        </div>
      </div>
      {!isMobile ? <Footer /> : <BottomNav />}
    </div>
  );
};

export default Contact;
