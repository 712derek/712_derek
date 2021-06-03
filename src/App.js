import React, { useState } from "react";
import GlobalStyle from "./globalStyles";

import Teaser from "./screens/Teaser";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Hamburger from "./components/Hamburger";
import Dropdown from "./components/Dropdown";
import DropdownTest from "./components/DropdownTest";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <HomeScreen />
      <Hamburger toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <DropdownTest isOpen={isOpen} toggle={toggle} />
      <Teaser />
      {/* <About /> */}
      <Projects />
    </>
  );
}

export default App;
