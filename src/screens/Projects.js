import React from "react";
import styled from "styled-components";

import Portfolio from "../projects/Portfolio";
import AmazonClone from "../projects/AmazonClone";

const ProjectSection = styled.section`
  width: 100vw;
  height: 100%;
`;

const BlankSection = styled.div``;

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <BlankSection style={{ height: "15vh" }} />
      <Portfolio />
      <AmazonClone />
    </ProjectSection>
  );
};

export default Projects;
