import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
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
      setPost(res.data);
      console.log(res.data);
    };
    fetchPost();
  }, [id]);

  const renderWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Change format on created at
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1 className="mt-5 blog-h1">{post.title}</h1>
      <Card>
        <Card.Text>{formatDate(post.created_at)}</Card.Text>
        <Card.Body>
          <Card.Text>{renderWithLineBreaks(post.content)}</Card.Text>
          <Card.Img src={post.image} alt={post.title} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostDetail;
