import './App.css';
import {Header} from './components/Header';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {TechnologyStack} from './components/TechnologyStack';
import {Contact} from './components/Contact';
import { NavBar } from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <TechnologyStack />
      <Contact />
    </>
  );
}

export default App;
