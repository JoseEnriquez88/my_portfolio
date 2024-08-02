import styles from "./bottomBarNavi.module.css";
import { Fragment, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const BottomBarNavi: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <ul className={styles.nav}>
          <span
            className={styles.navCircle}
            style={{
              left: activeIndex * 120 + 65 + "px",
              transition: "left 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          ></span>
          <li className={styles.navItem}>
            <a
              className={activeIndex === 0 ? styles.navItemActive : ""}
              onClick={() => handleClick(0)}
              href="#"
            >
              <HomeIcon
                className={styles.navItemIcon}
                style={{ width: "40px", height: "40px" }}
              />
              <span className={styles.navitemText}>Home</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={activeIndex === 1 ? styles.navItemActive : ""}
              onClick={() => handleClick(1)}
              href="#"
            >
              <WorkIcon
                className={styles.navItemIcon}
                style={{ width: "40px", height: "40px" }}
              />
              <span className={styles.navitemText}>Projects</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={activeIndex === 2 ? styles.navItemActive : ""}
              onClick={() => handleClick(2)}
              href="#"
            >
              <PersonIcon
                className={styles.navItemIcon}
                style={{ width: "40px", height: "40px" }}
              />
              <span className={styles.navitemText}>About</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              className={activeIndex === 3 ? styles.navItemActive : ""}
              onClick={() => handleClick(3)}
              href="#"
            >
              <ContactPageIcon
                className={styles.navItemIcon}
                style={{ width: "40px", height: "40px" }}
              />
              <span className={styles.navitemText}>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="filter-svg"
        className={styles.filterSvg}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </Fragment>
  );
};

export default BottomBarNavi;
