"use client";
import styles from "./nav.module.css";
import React from "react";
import { Link } from "react-scroll";

const pillTabs = [
  { title: "Inicio", href: "home" },
  { title: "Proyectos", href: "projects" },
  { title: "Sobre mí", href: "about" },
  { title: "Contacto", href: "contact" },
];

const Nav: React.FC = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        {pillTabs.map((tab, index) => (
          <Link
            key={index}
            to={tab.href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
            activeClass={styles.active}
          >
            {tab.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
