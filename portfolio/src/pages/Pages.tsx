import { Route, Routes } from "react-router-dom";
import OnePager from "./OnePager";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import ContactForm from "../components/ContactForm";
import Resume from "./Resume";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import PostDetail from "./PostDetail";
import CreatePage from "./CreatePage";
import ProjectDetails from "./ProjectDetails";

const Pages = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Update the authentication state upon successful login
  };

  return (
    <Routes>
      <Route path="/" element={<OnePager />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<PostDetail />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

      {/* Conditionally render the create-post route based on authentication */}
      {isAuthenticated && <Route path="/create" element={<CreatePage />} />}
    </Routes>
  );
};

export default Pages;
