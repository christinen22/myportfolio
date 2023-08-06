import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/api";
import { IPost } from "../types";

interface PostDetailProps {
  id: string | undefined;
  [key: string]: string | undefined;
}

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams<PostDetailProps>();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPost(Number(id));
      setPost(res);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
