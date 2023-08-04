import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import ContactForm from "../components/ContactForm";
import Resume from "./Resume";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
};

export default Pages;
