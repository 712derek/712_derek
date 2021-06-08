import React from "react";
import styled from "styled-components";

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: space-between;

  h2 {
    color: #fff;
    font-size: 3rem;
  }
  h6 {
    color: #fff;
    font-size: 1em;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const PageTitle = styled.h1`
  padding-top: 5rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: overline;
  font-size: 8rem;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  padding: 0 3rem;
`;
const SocialInfo = styled(ContactInfo)`
  text-align: right;
  margin-top: 4rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  padding: 0 3rem;
`;

const About = () => {
  return (
    <PageWrapper id="contact">
      <PageTitle>Reach me</PageTitle>
      <InfoWrapper>
        <ContactInfo>
          <h6>Contact</h6>
          <h2>Derek te Rijdt</h2>
          <h2>derekterijdt@gmail.com</h2>
          <h2>+32 (0) 4 1234 5678</h2>
        </ContactInfo>
        <SocialInfo>
          <h6>Follow</h6>
          <h2>LinkedIn</h2>
          <h2>Github</h2>
          <h2>Instagram</h2>
        </SocialInfo>
      </InfoWrapper>
      <Footer>
        <h2>Home</h2>
        <h2>CV</h2>
        <h2>Contact</h2>
      </Footer>
    </PageWrapper>
  );
};

export default About;
