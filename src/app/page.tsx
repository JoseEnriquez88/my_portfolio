"use client";
import "./page.css";
import { Fragment, useState, useEffect } from "react";
import Loader from "@/components/Loader/Loader";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page">
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <section id="home">
            <Navbar />
            <Hero />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Fragment>
      )}
    </div>
  );
}
