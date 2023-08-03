import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { IPost } from "../types";
import { getPosts, getPost } from "../services/api";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      console.log(res.posts);
      setPosts(res.posts);
    };
    fetchPosts();
  }, []);

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(); // Change format on created at
  };

  return (
    <Container>
      <h1 className="mt-5">Blog Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Card.Text>{formatDate(post.created_at)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
