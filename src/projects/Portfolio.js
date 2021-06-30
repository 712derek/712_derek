import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "../images/projects/first_portfolio.jpg";

const Section = styled.section`
  @media (max-width: 768px) {
    float: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -1rem;
  }
`;

const Container = styled.div`
  margin-top: 1rem;
  margin-left: 2rem;
  padding: 1rem 0;
  float: left;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0rem;
    padding: 0;
  }
`;

const ContentOverlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99.2%;
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
  h5 {
    color: #fff;
    margin-bottom: 1rem;
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
  @media (hover: none) {
    ${ContentOverlay} {
      display: none;
      opacity: 0;
    }
    ${ContentDetails} {
      display: none;
      opacity: 0;
    }
  }
`;

const MobileSection = styled(Section)`
  margin-top: 0;
`;

const MobileContent = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    background: #fff;
    padding: 1rem 0;
    margin-bottom: 3rem;

    h3 {
      font-weight: 100;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }
    h5 {
      margin-bottom: 1rem;
    }
    p {
      text-align: justify;
    }
  }
`;

const details = [
  {
    title: "React Portfolio",
    subtitle: "click image for website",
    mobileSub: "tap image for website",
    text: "As part of the Intec front-end developer course, I built this portfolio website. The assignment was to build a functional and aesthetic website using the React library. During this process I learned to build a website with Components. I kept the use of external Components to a minimum to be able to push myself to learn as much coding as possible. Building this website also gave me an introduction into using react hooks. Instead of using the conventional styling in css files I used styled components to style my portfolio.",
    image: image,
    link: { pathname: "https://712portfolio.netlify.app/" },
  },
];

const Portfolio = () => {
  return (
    <>
      {details.map((item, i) => (
        <div key={i}>
          <Section>
            <Container>
              <Content>
                <Link to={item.link} target="_blank">
                  <ContentOverlay />
                  <ContentDetails>
                    <h3>{item.title}</h3>
                    <h5>- {item.subtitle} -</h5>
                    <ContentText>
                      <p>{item.text}</p>
                    </ContentText>
                  </ContentDetails>
                  <ContentImage src={item.image} />
                </Link>
              </Content>
            </Container>
          </Section>
          <MobileSection>
            <MobileContent>
              <h5>- {item.mobileSub} -</h5>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </MobileContent>
          </MobileSection>
        </div>
      ))}
    </>
  );
};

export default Portfolio;
