import React from "react";
import GlobalStyle from "./globalStyles";

import About from "./screens/About";
import HomeScreen from "./screens/HomeScreen";
import Projects from "./screens/Projects";

function App() {
  return (
    <>
      <GlobalStyle />
      <HomeScreen />
      <About />
      <Projects />
    </>
  );
}

export default App;
