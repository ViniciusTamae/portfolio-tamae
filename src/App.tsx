import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Hackathon } from "./components/sections/Hackathon";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ChatWidget } from "./components/chat/ChatWidget";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Hackathon />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <Analytics />
    </>
  );
}

export default App;
