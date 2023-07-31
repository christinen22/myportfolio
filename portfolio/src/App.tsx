import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
