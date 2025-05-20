import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";
import { useState } from "react";

function App() {
  const [showAnnouncement, setShowAnnouncement]= useState(true);

  return (
    <>
    {showAnnouncement && <Announcement onClose={() => setShowAnnouncement(false)} />}
      <Navbar  showAnnouncement= {() => setShowAnnouncement(true)}/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
