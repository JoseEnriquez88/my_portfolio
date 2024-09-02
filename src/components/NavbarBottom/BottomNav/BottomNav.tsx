import styles from "./bottomNav.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  IoMdHome,
  IoMdBriefcase,
  IoMdPersonAdd,
  IoMdContact,
  IoIosMenu,
} from "react-icons/io";
import SocialsLinks from "../../SocialLinks/SocialLinks";

const NavbarBottom: React.FC = () => {
  const [socialLinksOpen, setSocialLinksOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setSocialLinksOpen(true);
  };

  const handleCloseSocialLinks = () => {
    setSocialLinksOpen(false);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.iconContainer}>
        <Link to="home" activeClass={styles.active} spy={true} smooth={true} offset={-70} duration={500}>
          <li className={styles.navItem}>
            <span role="img" className={styles.iconWrapper}>
              <IoMdHome className={`${styles.icon} ${styles.activeIcon}`} />
            </span>
            <span className={`${styles.title} ${styles.activeTitle}`}>Inicio</span>
          </li>
        </Link>
        <Link to="projects" activeClass={styles.active} spy={true} smooth={true} offset={-70} duration={500}>
          <li className={styles.navItem}>
            <span role="img" className={styles.iconWrapper}>
              <IoMdBriefcase className={`${styles.icon} ${styles.activeIcon}`} />
            </span>
            <span className={`${styles.title} ${styles.activeTitle}`}>Proyectos</span>
          </li>
        </Link>
        <Link to="about" activeClass={styles.active} spy={true} smooth={true} offset={-70} duration={500}>
          <li className={styles.navItem}>
            <span role="img" className={styles.iconWrapper}>
              <IoMdPersonAdd className={`${styles.icon} ${styles.activeIcon}`} />
            </span>
            <span className={`${styles.title} ${styles.activeTitle}`}>Sobre mí</span>
          </li>
        </Link>
        <Link to="contact" activeClass={styles.active} spy={true} smooth={true} offset={-70} duration={500}>
          <li className={styles.navItem}>
            <span role="img" className={styles.iconWrapper}>
              <IoMdContact className={`${styles.icon} ${styles.activeIcon}`} />
            </span>
            <span className={`${styles.title} ${styles.activeTitle}`}>Contacto</span>
          </li>
        </Link>
        <li onClick={handleMenuClick} className={styles.navItem}>
          <span role="img" className={styles.iconWrapper}>
            <IoIosMenu className={styles.icon} />
          </span>
          Redes
        </li>
      </ul>
      <SocialsLinks open={socialLinksOpen} onClose={handleCloseSocialLinks} />
    </div>
  );
};

export default NavbarBottom;
