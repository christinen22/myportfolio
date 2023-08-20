import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IPost } from "../types";
import { getPosts } from "../services/api";

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

  const renderFirstFiveLines = (text: string): JSX.Element => {
    const lines = text.split("\n").slice(0, 5);
    return (
      <div>
        {lines.map((line, index) => (
          <div key={index}>
            {line}
            <br />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container>
      <h1 className="mt-5 blog-h1">Blog Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="card-text-pre">
                  {renderFirstFiveLines(post.content)}
                </Card.Text>
                <Card.Img src={post.image} alt={post.title} />

                <p className="p-date">{formatDate(post.created_at)}</p>

                <Link to={`/blog/${post.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
