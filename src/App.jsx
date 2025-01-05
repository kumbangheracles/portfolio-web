import { useState } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TestContact from "./Components/TestContact";
function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Project />
      {/* <Contact /> */}
      <TestContact />

      <Footer />
    </>
  );
}

export default App;
