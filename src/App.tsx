import "./App.scss";
import { Banner } from "./components/Banner";
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NavBar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
