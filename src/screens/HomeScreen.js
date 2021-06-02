import React from "react";
import styled, { keyframes } from "styled-components";
import BackgroundTop from "../images/logo_black_top.png";
import BackgroundBottom from "../images/logo_black_bottom.png";

const appearLeft = keyframes`
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0%);
  }
`;
const appearRight = keyframes`
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0%);
  }
`;

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: #1c1c1a;
`;

const BackgroundImageTop = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  object-fit: cover;
  animation: ${appearRight} 1.2s cubic-bezier(0.3, 1, 0.3, 1.05);
`;

const BackgroundImageBottom = styled(BackgroundImageTop)`
  animation: ${appearLeft} 1.2s cubic-bezier(0.3, 1, 0.3, 1.05);
`;

const HomeScreen = () => {
  return (
    <PageWrapper>
      <BackgroundImageTop src={BackgroundTop} />
      <BackgroundImageBottom src={BackgroundBottom} />
    </PageWrapper>
  );
};

export default HomeScreen;
