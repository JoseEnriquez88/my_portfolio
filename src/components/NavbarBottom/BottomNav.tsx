"use client";
import { useState, useLayoutEffect } from "react";
import BottomBarNavi from "./BottomBarNavi";
import NavbarBottom from "./NavbarBottom";

const BottomNav: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useLayoutEffect(() => {
    const showNav = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    showNav();
    window.addEventListener("resize", showNav);

    return () => {
      window.removeEventListener("resize", showNav);
    };
  }, []);

  return <>{isMobile && <NavbarBottom />}</>;
};

export default BottomNav;
