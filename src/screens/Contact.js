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
  }
  h6 {
    color: rgb(216, 178, 252);
    font-size: 1em;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
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
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  padding: 0 3rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
const SocialInfo = styled(ContactInfo)`
  text-align: right;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  padding: 0 3rem;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

const Link = styled(SocialLink)`
  text-decoration: none;
`;

const HoverLink = styled.div`
  cursor: pointer;
  &:hover {
    transition: 0.15s ease-out;
    transform: skewX(7deg) skewY(7deg);
  }
  @media (hover: none) {
    display: contents;
  }
`;

const HoverLinkSmall = styled(HoverLink)`
  &:hover {
    transform: skewX(-2deg) skewY(-2deg);
  }
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
    site: "Instagram",
    link: { pathname: "https://www.instagram.com/712_derek/" },
  },
];

const About = () => {
  return (
    <PageWrapper id="contact">
      <PageTitle>Reach me</PageTitle>
      <InfoWrapper>
        {contactInfo.map((item, contactInfo) => (
          <ContactInfo key={contactInfo}>
            <h6>Contact</h6>
            <h2>{item.name}</h2>
            <HoverLinkSmall>
              <h2>{item.email}</h2>
            </HoverLinkSmall>
            <a href={item.telLink}>
              <HoverLinkSmall>
                <h2>{item.tel}</h2>
              </HoverLinkSmall>
            </a>
          </ContactInfo>
        ))}
        <SocialInfo>
          <h6>Follow</h6>
          {socialInfo.map((item, index) => (
            <Link key={index} to={item.link} target="_blank">
              <HoverLink>
                <h2>{item.site}</h2>
              </HoverLink>
            </Link>
          ))}
        </SocialInfo>
      </InfoWrapper>
      <Footer>
        <ScrollLink to="home" smooth={true} duration={750}>
          <HoverLink>
            <h2>Home</h2>
          </HoverLink>
        </ScrollLink>
        <Link to={{ pathname: cv }} target="_blank">
          <HoverLink>
            <h2>CV</h2>
          </HoverLink>
        </Link>
        <HoverLink>
          <h2>About</h2>
        </HoverLink>
      </Footer>
    </PageWrapper>
  );
};

export default About;
