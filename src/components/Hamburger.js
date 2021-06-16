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
    filter: invert(0.99);
  }
`;

const BurgerBar = styled.div`
  width: 150px;
  height: 10px;
  background: black;
  margin: 5px;
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
