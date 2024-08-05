"use client";
import React, { useEffect } from "react";
import styles from "./navlinks.module.css";

const pillTabs = [
  { title: "Inicio", href: "home" },
  { title: "Proyectos", href: "projects" },
  { title: "Sobre mí", href: "about" },
  { title: "Contacto", href: "contact" },
];

const Nav: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove(styles.active);
            const activeLink = document.querySelector(
              `header nav a[href*="${id}"]`
            );
            if (activeLink) {
              activeLink.classList.add(styles.active);
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        {pillTabs.map((tab, index) => (
          <a
            key={index}
            href={`#${tab.href}`}
            className={index === 0 ? styles.active : ""}
          >
            {tab.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
