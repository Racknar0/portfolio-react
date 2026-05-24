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


const SectionDivider = () => {
  return (
    <div className="relative w-full h-[1px] my-12 lg:my-16 flex items-center justify-center pointer-events-none select-none">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/35 via-pink-500/35 to-transparent blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 via-pink-500/20 to-transparent" />
      <div className="z-10 w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border border-white/20 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState("es");

  return (
    <>
    <SplashCursor />
      <VantaBackground />
      <div className="relative z-10 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="container relative z-20 mx-auto px-8">
          <Navbar lang={lang} setLang={setLang} />
          <Hero lang={lang} />
          <SectionDivider />
          <Technologies lang={lang} />
          <SectionDivider />
          <Experience lang={lang} />
          <SectionDivider />
          <Projects lang={lang} />
          <SectionDivider />
          <Footer lang={lang} />
        </div>
      </div>
      <ScrollToTop lang={lang} />
      <WhatsAppButton lang={lang} />
    </>
  );
};

export default App;
