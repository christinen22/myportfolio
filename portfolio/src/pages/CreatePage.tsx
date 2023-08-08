import React from "react";
import CreatePostForm from "../components/CreatePostForm";
import CreateProjectForm from "../components/CreateProjectForm";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const handlePostCreated = () => {
    const navigate = useNavigate();
    navigate("/blog"); // Redirect to the blog page after successful post creation
  };

  const handleProjectCreated = () => {
    const navigate = useNavigate();
    navigate("/projects"); // Redirect to the project page after successful post creation
  };

  return (
    <div>
      <CreatePostForm onPostCreated={handlePostCreated} />
      <CreateProjectForm onPostCreated={handleProjectCreated} />
    </div>
  );
};

export default CreatePage;
