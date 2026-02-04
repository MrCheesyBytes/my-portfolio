import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Quotes from './components/Quotes';
import Hosting from './components/Hosting';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Quotes />
      <Hosting />
      <Contact />
    </main>
  );
}
