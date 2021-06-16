import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import image from "../images/projects/amazon_clone.png";

const Section = styled.section`
  @media (max-width: 768px) {
    float: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  padding: 1rem 0;
  margin-right: 2rem;
  float: right;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0rem;
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
  border-bottom: solid 1px;
  border-color: rgba(0, 0, 0, 0.1);
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
    title: "Amazon Clone",
    text: "For my first introduction to React I followed an instruction video to build an amazon clone. Here I learned important basics of components and how to structure my projects.",
    image: image,
    link: { pathname: "https://clone-ffb32.web.app/" },
  },
];

const AmazonClone = () => {
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

export default AmazonClone;
