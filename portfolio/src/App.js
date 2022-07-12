import './App.css';
import Head from './components/head/head';
import About from './components/about/about';
import Languages from './components/languages/languages';
import Projects from './components/projects/projects';
import Contact from './components/contact/constact';

export default function App() {
  return (
    <div>
      <Head />
      <About />
      <Languages />
      <Projects />
      <Contact />
    </div>
  );
};