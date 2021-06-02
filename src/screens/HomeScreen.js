import React from "react";
import styled from "styled-components";
import Background from "../images/logo_black.png";

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: #1c1c1a;
`;

const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  object-fit: cover;
`;

const HomeScreen = () => {
  return (
    <PageWrapper>
      <BackgroundImage src={Background} />
    </PageWrapper>
  );
};

export default HomeScreen;
