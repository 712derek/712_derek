import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import { navData } from "../data/NavData";

const DropdownSection = styled.section`
  display: flex;
  justify-content: center;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const DropdownLink = styled(Link)`
  color: #fff;
  font-size: 6rem;
  padding: 1rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  transition: 0.15s ease-out;

  &:hover {
    transform: rotate(7deg);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    &:hover {
      transform: none;
    }
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownSection>
      <DropdownContainer isOpen={isOpen}>
        {navData.map((item, index) => (
          <DropdownLink
            onClick={toggle}
            to={item.link}
            key={index}
            smooth={true}
            duration={750}
          >
            {item.title}
          </DropdownLink>
        ))}
      </DropdownContainer>
    </DropdownSection>
  );
};

export default Dropdown;
