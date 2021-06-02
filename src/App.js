import React from "react";
import GlobalStyle from "./globalStyles";

import Teaser from "./screens/Teaser";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/About";
import Projects from "./screens/Projects";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomeScreen />
      <Teaser />
      <About />
      <Projects />
    </>
  );
}

export default App;
