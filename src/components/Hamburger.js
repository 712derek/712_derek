import React from "react";
import styled from "styled-components";

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
`;

const Hamburger = styled.div`
  width: 150px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.15s ease-out;
  &:hover {
    transform: scaleX(1.5);
  }
`;

const BurgerBar = styled.div`
  width: 150px;
  height: 12px;
  background: black;
  margin: 5px;
  box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
`;

const HamburgerMenu = ({ toggle }) => {
  return (
    <HamburgerWrapper>
      <Hamburger onClick={toggle}>
        <BurgerBar />
        <BurgerBar />
      </Hamburger>
    </HamburgerWrapper>
  );
};

export default HamburgerMenu;
