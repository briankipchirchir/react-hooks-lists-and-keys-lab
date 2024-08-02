import React from "react";
import ProjectItem from "./ProjectItem"
function ProjectList  ({ projects }) {
  const project=projects.map((project)=>{
    return(<ProjectItem key={projects.Id}name={projects.name}about={projects.about}technologies={projects.technologies}/>)
  })
  return (

    <div id="projects">
      <h2>My projects</h2>
      <div id="project-list">
        {project}
      </div>

    </div>
  );
};

export default ProjectList;
