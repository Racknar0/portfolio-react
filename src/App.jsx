import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
// import ParticleCursor from "./components/ParticleCursor";
import VantaBackground from "./components/VantaBackground"; 
import SplashCursor from './SplashCursor'


const App = () => {
  const [lang, setLang] = useState("es");

  return (
    <>
    <SplashCursor />
      <VantaBackground />
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="container relative z-20 mx-auto px-8">
          <Navbar lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <Technologies lang={lang} />
          <Experience lang={lang} />
          <Projects lang={lang} />
          <Footer lang={lang} />
        </div>
      </div>
      <ScrollToTop lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
};

export default App;
