import React from "react";
import styled from "styled-components";
import { Link as SocialLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import cv from "../docs/CV.pdf";

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  h2 {
    color: rgb(216, 178, 252);
    font-size: 3rem;
    cursor: pointer;
    transition: 0.15s ease-out;
    &:hover {
      color: #fff;
    }
  }
  h6 {
    color: rgb(216, 178, 252);
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
  color: rgb(216, 178, 252);
  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  padding: 0 3rem;
`;

const Link = styled(SocialLink)`
  text-decoration: none;
`;

const contactInfo = [
  {
    name: "Derek te Rijdt",
    email: "derekterijdt@gmail.com",
    tel: "+32 (0) 4 8598 8001",
    telLink: "tel: 00 32 485 98 80 01",
  },
];

const socialInfo = [
  {
    site: "LinkedIn",
    link: { pathname: "https://www.linkedin.com/in/derekterijdt/" },
  },
  {
    site: "GitHub",
    link: { pathname: "https://github.com/712derek" },
  },
  {
    site: "Instgram",
    link: { pathname: "https://www.instagram.com/712_derek/" },
  },
];

const About = () => {
  return (
    <PageWrapper id="contact">
      <PageTitle>Reach me</PageTitle>
      <InfoWrapper>
        {contactInfo.map((item, index) => (
          <ContactInfo key={index}>
            <h6>Contact</h6>
            <h2>{item.name}</h2>
            <h2>{item.email}</h2>
            <a href={item.telLink}>
              <h2>{item.tel}</h2>
            </a>
          </ContactInfo>
        ))}
        <SocialInfo>
          <h6>Follow</h6>
          {socialInfo.map((item, index) => (
            <Link key={index} to={item.link} target="_blank">
              <h2>{item.site}</h2>
            </Link>
          ))}
        </SocialInfo>
      </InfoWrapper>
      <Footer>
        <ScrollLink to="home" smooth={true} duration={750}>
          <h2>Home</h2>
        </ScrollLink>
        <Link to={{ pathname: cv }} target="_blank">
          <h2>CV</h2>
        </Link>
        <h2>Contact</h2>
      </Footer>
    </PageWrapper>
  );
};

export default About;
