import { MotionConfig } from "motion/react";
import AuroraBackground from "./components/AuroraBackground";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LightboxProvider } from "./components/Lightbox";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LightboxProvider>
        <div className="relative min-h-screen overflow-x-clip bg-void text-white">
          <AuroraBackground />
          <CursorGlow />
          <Nav />
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Qualifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </LightboxProvider>
    </MotionConfig>
  );
}

export default App;
