import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./style.css";

import Portfolio from "../projects/Portfolio";

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
    </ProjectSection>
  );
};

export default Projects;
