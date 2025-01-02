import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Project />
    </>
  );
}

export default App;
