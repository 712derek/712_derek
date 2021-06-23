import React from "react";
import styled from "styled-components";

import Portfolio from "../projects/Portfolio";
import AmazonClone from "../projects/AmazonClone";
import ReactNative from "../projects/ReactNative";
import InteriorDesign from "../projects/InteriorDesign";

const ProjectSection = styled.section`
  width: 100vw;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 25px;
  }
`;

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <Portfolio />
      <ReactNative />
      <AmazonClone />
      <InteriorDesign />
    </ProjectSection>
  );
};

export default Projects;
