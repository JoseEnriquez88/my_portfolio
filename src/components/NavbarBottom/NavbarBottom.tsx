"use client";
import { useState, useLayoutEffect } from "react";
import BottomNav from "./BottomNav/BottomNav";

const NavbarBottom: React.FC = () => {
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

  return <>{isMobile && <BottomNav />}</>;
};

export default NavbarBottom;
