import React from "react";
import GlobalStyle from "./globalStyles";

import Teaser from "./screens/Teaser";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Hamburger from "./components/Hamburger";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomeScreen />
      <Hamburger />
      <Teaser />
      <About />
      <Projects />
    </>
  );
}

export default App;
