import axios from "axios";
import { IPost } from "../types";

export const baseUrl = "http://127.0.0.1:8000";

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
  const res = await axios.get(`${baseUrl}/project/${id}`);

  return res.data;
};

/**
 * POST project
 */

export const createProject = async () => {
  const res = await axios.post(`${baseUrl}/projects`);
  return res.data;
};
