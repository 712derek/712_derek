import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Hamburger from "./components/Hamburger";
import Dropdown from "./components/Dropdown";

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
      <Router>
        <Projects />
        <About />
      </Router>
    </>
  );
}

export default App;
