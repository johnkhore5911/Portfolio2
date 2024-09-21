import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/srey.png"
          title="College Tech Fest Website"
          description="The tech fest website of St. Thomas' College and Engineering used for showing events and registering with hidden easter eggs."
        />
        <ProjectCard
          src="/medvision.png"
          title="MedVision: Intelligent medication management system"
          description="A medication management system that helps users(elderly) take the correct medicine at the correct time."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Portfolio website using NextJs and Framer Motion to showcase my skills and project works."
        />
      </div>
    </div>
  );
};

export default Projects;