import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Pages;
