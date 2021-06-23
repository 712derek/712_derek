import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Hamburger from "./components/Hamburger";
import Dropdown from "./components/Dropdown";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

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
        <Contact />
      </Router>
    </>
  );
}

export default App;
