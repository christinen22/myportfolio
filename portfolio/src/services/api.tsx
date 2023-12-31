import axios from "axios";

export const baseUrl = "https://christinenapi.com";

/**
 * GET posts
 */
export const getPosts = async () => {
  const res = await axios.get(`${baseUrl}/posts`);
  return res.data;
};

/**
 * GET single post
 */

export const getPost = async (id: number) => {
  const res = await axios.get(`${baseUrl}/posts/${id}`);

  return res.data;
};

/**
 * POST post
 */

export const createPost = async () => {
  const res = await axios.post(`${baseUrl}/posts`);
  return res.data;
};

/**
 * GET projects
 */
export const getProjects = async () => {
  const res = await axios.get(`${baseUrl}/projects`);
  return res.data;
};

/**
 * GET single project
 */

export const getProject = async (id: number) => {
  const res = await axios.get(`${baseUrl}/projects/${id}`);

  return res.data;
};

/**
 * POST project
 */

export const createProject = async () => {
  const res = await axios.post(`${baseUrl}/projects`);
  return res.data;
};

/**
 * POST contact
 */

export const createMessage = async (formData: FormData) => {
  const res = await axios.post(`${baseUrl}/send-email`, formData);
  return res.data;
};
