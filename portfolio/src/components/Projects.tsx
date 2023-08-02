import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { IProject } from "../types";
import { getProject, getProjects } from "../services/api";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await getProjects();
      console.log(res.projects);
      setProjects(res.projects);
    };
    fetchProjects();
  }, []);

  return (
    <Container>
      <h1 className="mt-5">Previous Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Img src={project.image} alt={project.title} />
                <Card.Text>{project.link}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
