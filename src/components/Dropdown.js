import React from "react";
import styled from "styled-components";

const DropdownSection = styled.section`
  display: flex;
  justify-content: center;
  z-index: ${({ isOpen }) => (isOpen ? "999" : "-1")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
`;

const DropdownWrapper = styled.div`
  width: 80vw;
  height: 80vh;
  background: lime;
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownSection>
      <DropdownWrapper isOpen={isOpen}></DropdownWrapper>
    </DropdownSection>
  );
};

export default Dropdown;
