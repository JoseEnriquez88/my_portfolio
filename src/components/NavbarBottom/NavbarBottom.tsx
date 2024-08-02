import styles from "./navbarBottom.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
// import HomeIcon from "@mui/icons-material/Home";
// import WorkIcon from "@mui/icons-material/Work";
// import PersonIcon from "@mui/icons-material/Person";
// import MenuIcon from "@mui/icons-material/Menu";
// import IoMdContact from "@mui/icons-material/ContactPage";
import {
  IoMdHome,
  IoMdBriefcase,
  IoMdPersonAdd,
  IoMdContact,
  IoIosMenu,
} from "react-icons/io";
import { SiAboutdotme } from "react-icons/si"; //! se puede usar en el about me
import SocialsLinks from "../SocialLinks/SocialLinks";

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
        <Link to="home">
          <li>
            <span role="img">
              <IoMdHome className={styles.icon} />
            </span>
            <span className={styles.title}>Inicio</span>
          </li>
        </Link>
        <Link to="projects">
          <li>
            <span role="img">
              <IoMdBriefcase className={styles.icon} />
            </span>
            Proyectos
          </li>
        </Link>
        <Link to="about">
          <li>
            <span role="img">
              <IoMdPersonAdd className={styles.icon} />
            </span>
            Sobre mí
          </li>
        </Link>
        <Link to="contact">
          <li>
            <span role="img">
              <IoMdContact className={styles.icon} />
            </span>
            Contacto
          </li>
        </Link>
        <li onClick={handleMenuClick}>
          <span role="img">
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
