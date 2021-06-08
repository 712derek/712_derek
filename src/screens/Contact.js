import React from "react";
import styled from "styled-components";

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: space-between;

  h6 {
    color: #fff;
    font-size: 1em;
    margin-bottom: 1rem;
  }
  h2 {
    color: #fff;
    font-size: 3rem;
  }
`;

const PageTitle = styled.h1`
  padding: 2rem 0;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  font-size: 8rem;
  color: #fff;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactInfo = styled.div`
  padding: 0 3rem;
`;
const SocialInfo = styled(ContactInfo)``;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
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
        <h2>CV</h2>
        <h2>Home</h2>
        <h2>Contact</h2>
      </Footer>
    </PageWrapper>
  );
};

export default About;
