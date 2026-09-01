import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Hackathon } from "./components/Hackathon";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

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
