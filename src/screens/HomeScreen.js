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
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(5, 5, 5, 0.9);
`;

const BackgroundImageTop = styled.img`
  z-index: -1;
  position: fixed;
  object-fit: cover;
  animation: ${appearRight} 1.2s cubic-bezier(0.3, 1, 0.3, 1.05);
  @media (max-width: 768px) {
    height: 100vh;
    transform: rotate(-90deg);
  }
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
