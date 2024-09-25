"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Link } from "react-scroll";
import Nav from "../NavLinks/Nav";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState<boolean>(false);

  useEffect(() => {
    const navColored = () => {
      if (typeof window !== "undefined" && window.scrollY >= 550) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navColored);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", navColored);
      }
    };
  }, []);

  return (
    <header>
      <nav
        className={navbar ? `${styles.navbar} ${styles.active}` : styles.navbar}
      >
        <Link to="home">
          <Image
            src="/logo.svg"
            alt="logo"
            className={styles.logo}
            width={50}
            height={45}
          />
        </Link>
        <div className={styles.itemsContainer}>
          <Nav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
