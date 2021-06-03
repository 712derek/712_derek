import React from "react";
import styled from "styled-components";

import { aboutData } from "../data/AboutData";
import Portrait from "../images/portrait.png";

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw%;
  height: 40%;
  background: rgba(255, 255, 255, 0.9);
`;

const AboutImage = styled.img`
  width: 250px;
  border-radius: 50%;
  margin: 0 2rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
`;

const AboutText = styled.p`
  text-align: left;
  width: 60%;

  p {
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <PageWrapper id="about">
      {/* <AboutCard>
        <AboutImage src={Portrait} atl="portrait" />
        <AboutText>
          {aboutData.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </AboutText>
      </AboutCard> */}
    </PageWrapper>
  );
};

export default About;
