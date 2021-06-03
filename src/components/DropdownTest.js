import React from "react";
import styled from "styled-components";

const DropdownSection = styled.section`
  display: flex;
  justify-content: center;
`;

const DropdownContainer = styled.div`
  position: fixed;
  /* z-index: ${({ isOpen }) => (isOpen ? "999" : "-1")}; */
  z-index: 999;
  width: 90vw;
  height: 90vh;
  background: rgba(0, 0, 0);
  transition: 0.3s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
`;

const DropdownLink = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 6rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.15s ease-out;

  &:hover {
    transform: rotate(7deg);
  }
`;

const DropdownTest = ({ isOpen, toggle }) => {
  return (
    <DropdownSection>
      <DropdownContainer isOpen={isOpen}>
        <DropdownLink onClick={toggle}>HOME</DropdownLink>
        <DropdownLink onClick={toggle}>PROJECTS</DropdownLink>
        <DropdownLink onClick={toggle}>CONTACT</DropdownLink>
        <DropdownLink onClick={toggle}>ABOUT</DropdownLink>
      </DropdownContainer>
    </DropdownSection>
  );
};

export default DropdownTest;
