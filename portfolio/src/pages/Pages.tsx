import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import ContactForm from "../components/ContactForm";
import Resume from "./Resume";
import LoginForm from "../components/LoginForm";
import CreatePostForm from "../components/CreatePostForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostDetail from "./PostDetail";

const Pages = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Update the authentication state upon successful login
  };

  const handlePostCreated = () => {
    const navigate = useNavigate();
    navigate("/blog"); // Redirect to the blog page after successful post creation
  };

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<PostDetail />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />

      {/* Conditionally render the create-post route based on authentication */}
      {isAuthenticated && (
        <Route
          path="/create-post"
          element={<CreatePostForm onPostCreated={handlePostCreated} />}
        />
      )}
    </Routes>
  );
};

export default Pages;
