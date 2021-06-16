import React, { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import Portfolio from "../projects/Portfolio";
import AmazonClone from "../projects/AmazonClone";

const ProjectSection = styled.section`
  width: 100vw;
  height: 100%;
`;

const BlankSection = styled.div``;

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const Projects = () => {
  return (
    <ProjectSection id="projects">
      <BlankSection style={{ height: "15vh" }} />
      <div>
        <FadeInWhenVisible>
          <Portfolio />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <AmazonClone />
        </FadeInWhenVisible>
      </div>
    </ProjectSection>
  );
};

export default Projects;
