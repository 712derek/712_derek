import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  visibility: ${({ hamburger }) => (hamburger ? "" : "hidden")};
`;

const BurgerBar = styled.div`
  width: 150px;
  height: 10px;
  background-color: rgba(5, 5, 5, 0.5);
  margin: 5px;
`;

const HamburgerMenu = () => {
  const [hamburger, setHamburger] = useState(false);

  const HamburgerHandler = () => {
    if (window.scrollY >= "500") {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
  };

  window.addEventListener("scroll", HamburgerHandler);

  return (
    <HamburgerWrapper hamburger={hamburger}>
      <BurgerBar />
      <BurgerBar />
    </HamburgerWrapper>
  );
};

export default HamburgerMenu;
