"use client";
import styles from "./footer.module.css";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Social } from "@/utils/types";

const socials: Record<string, Social> = {
  github: {
    url: "https://github.com/JoseEnriquez88",
    icon: <FaGithub className={styles.icon} />,
  },
  linkedin: {
    url: "https://www.linkedin.com/in/joseenriquez80/",
    icon: <FaLinkedin className={styles.icon} />,
  },
  discord: {
    url: "https://discord.com/channels/954778773654478940",
    icon: <FaDiscord className={styles.icon} />,
  },
  mail: {
    url: "mailto:eenriquez.jose@gmail.com",
    icon: <MdEmail className={styles.icon} />,
  },
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          {Object.values(socials).map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className={styles.textContainer}>
          &copy; {new Date().getFullYear()}: Jose Enriquez
          <Image
            src="/logo.png"
            alt="logo"
            className={styles.logo}
            width={25}
            height={25}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
