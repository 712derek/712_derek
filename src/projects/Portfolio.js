import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "../images/projects/first_portfolio.png";

const Section = styled.section`
  @media (max-width: 768px) {
    float: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  padding: 1em 0;
  float: right;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: all 0.4s ease-in-out 0s;
`;

const ContentImage = styled.img`
  width: 100%;
`;

const ContentDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 100%; // play with this value for fade direction
  left: 50%;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out 0s;

  h3 {
    color: #fff;
    font-weight: 100;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    color: #fff;
    text-align: justify;
  }
`;

const ContentText = styled.div`
  width: 70%;
`;

const Content = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;

  &:hover {
    ${ContentOverlay} {
      opacity: 1;
    }
    ${ContentDetails} {
      top: 50%; // play with this value for fade direction
      left: 50%;
      opacity: 1;
    }
  }
`;

const details = [
  {
    title: "React Portfolio",
    text: "This is As part of the Intec front-end developer course, I built this portfolio website. The assignment was to build a functional and aesthetic website using the React library. During this process I learned to build a website with Components. I kept the use of external Components to a minimum to be able to push myself to learn as much coding as possible. Building this website also gave me an introduction into using react hooks. Instead of using the conventional styling in css files I used styled components to style my portfolio.",
    image: image,
    link: { pathname: "https://www.712derek.com" },
  },
];

const Portfolio = () => {
  return (
    <Section>
      <Container>
        {details.map((item, index) => (
          <Content key={index}>
            <Link to={item.link} target="_blank">
              <ContentOverlay />
              <ContentDetails>
                <h3>{item.title}</h3>
                <ContentText>
                  <p>{item.text}</p>
                </ContentText>
              </ContentDetails>
              <ContentImage src={item.image} />
            </Link>
          </Content>
        ))}
      </Container>
    </Section>
  );
};

export default Portfolio;
