import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CreateProjectFormProps {
  onPostCreated: () => void;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://christinenapi.com/projects",
        {
          title,
          description,
          image,
          link,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // Post created successfully, redirect to projects page
        navigate("/projects");
      }
    } catch (error) {
      setError("An error occurred while creating the post.");
    }
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Image url</label>
          <textarea
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Link</label>
          <textarea
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Create Project</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default CreateProjectForm;
