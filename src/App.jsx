import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
