import React from "react";
import styled from "styled-components";

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 100%;
  cursor: pointer;
`;

const BurgerBar = styled.div`
  width: 150px;
  height: 10px;
  background-color: black;
  margin: 5px;
`;

const HamburgerMenu = () => {
  return (
    <HamburgerWrapper>
      <BurgerBar />
      <BurgerBar />
    </HamburgerWrapper>
  );
};

export default HamburgerMenu;
