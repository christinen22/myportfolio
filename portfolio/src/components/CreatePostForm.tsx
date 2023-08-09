import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CreatePostFormProps {
  onPostCreated: () => void;
}

const CreatePostForm: React.FC<CreatePostFormProps> = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://christinenapi.com/api/posts",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        // Post created successfully, redirect to blog page
        navigate("/blog");
      }
    } catch (error) {
      setError("An error occurred while creating the post.");
    }
  };

  return (
    <div>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="label-form"
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="textarea-form"
          ></textarea>
        </div>
        <button type="submit">Create Post</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default CreatePostForm;
