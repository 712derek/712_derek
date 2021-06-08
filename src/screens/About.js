import React from "react";
import styled from "styled-components";

import image from "../images/portrait.png";

const PageWrapper = styled.section`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(5, 5, 5, 0.95);
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInfo = styled.div`
  width: 50vw;
  padding: 1rem;
  color: #fff;
`;

const ContentImage = styled.img`
  width: 25vw;
  max-width: 250px;
  padding: 1rem;
  /* border-radius: 50%; */
`;

const SocialMedia = styled.div`
  flex: 1;
  padding: 1rem;
  color: #fff;

  h3 {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`;

const details = [
  {
    about01:
      "Hi, I'm Derek, web developer student, future Front-end developer. I have a high interest in aesthetical and functional design. Currently, I am following a programme to become a Front-end Developer / React Developer at Intec Brussels. I also have a Bachelor with distinction in spatial design, graduated top of my class in 2018.",
    about02:
      "This year I am working to master HTML, CSS, JavaScript and React (Native) to combine these competences with my spatial design skills. My long term goal is to become a full stack developer.",
    image: image,
  },
];

const About = () => {
  return (
    <PageWrapper id="about">
      {details.map((item, index) => (
        <ContentContainer key={index}>
          <ContentInfo>
            <p>{item.about01}</p>
            <br />
            <p>{item.about02}</p>
          </ContentInfo>
          <ContentImage src={item.image} />
        </ContentContainer>
      ))}
    </PageWrapper>
  );
};

export default About;
