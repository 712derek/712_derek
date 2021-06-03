import React from "react";
import styled from "styled-components";

import project01 from "../images/projects/first_portfolio.png";
import "./style.css";

const ProjectSection = styled.section`
  width: 100vw;
  height: 100%;
  /* background: rgba(255, 0, 0, 0.5); */

  img {
    width: 100%;
  }
  h3 {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }
  p {
    color: #fff;
    font-style: normal;
  }
`;

const ProjectWrapperRight = styled.div`
  float: right;

  @media (max-width: 768px) {
   float: none;
`;
const ProjectWrapperLeft = styled.div`
  float: left;
  
  @media (max-width: 768px) {
   float: none;
`;

const ProjectContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 60vw;
  margin: auto;
  overflow: hidden;
`;

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <ProjectWrapperRight>
        <div class="container">
          <div class="content">
            <i href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div class="content-overlay"></div>
              <img class="content-image" src={project01} />
              <div class="content-details fadeIn-bottom">
                <h3>React Portfolio</h3>
                <p>
                  As part of the Intec front-end developer course, I built this
                  portfolio website. The assignment was to build a functional
                  and aesthetic website using the React library. During this
                  process I learned to build a website with Components. I kept
                  the use of external Components to a minimum to be able to push
                  myself to learn as much coding as possible. Building this
                  website also gave me an introduction into using react hooks.
                  Instead of using the conventional styling in css files I used
                  styled components to style my portfolio.
                </p>
              </div>
            </i>
          </div>
        </div>
      </ProjectWrapperRight>
      <ProjectWrapperLeft>
        <div class="container">
          <div class="content">
            <i href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
              <div class="content-overlay"></div>
              <img class="content-image" src={project01} />
              <div class="content-details fadeIn-bottom">
                <h3>React Portfolio</h3>
                <p>
                  As part of the Intec front-end developer course, I built this
                  portfolio website. The assignment was to build a functional
                  and aesthetic website using the React library. During this
                  process I learned to build a website with Components. I kept
                  the use of external Components to a minimum to be able to push
                  myself to learn as much coding as possible. Building this
                  website also gave me an introduction into using react hooks.
                  Instead of using the conventional styling in css files I used
                  styled components to style my portfolio.
                </p>
              </div>
            </i>
          </div>
        </div>
      </ProjectWrapperLeft>
    </ProjectSection>
  );
};

export default Projects;
