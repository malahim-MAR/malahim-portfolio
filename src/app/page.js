import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import ProjectsSection from "./Components/ProjectsSection";
import Service from "./Components/Service";
import Experience from "./Components/Experience";

const page = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navbar />
        <Hero />
        <Skills />
        <ProjectsSection />
        <Service />
        <Experience />
      </div>
    </>
  );
};

export default page;
