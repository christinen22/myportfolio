import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IProject } from "../types";
import { getProjects } from "../services/api";

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
      <h1 className="mt-5 project-h1">Previous Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="card-text-pre">
                  {renderFirstFiveLines(project.description)}
                </Card.Text>
                <Card.Img src={project.image} alt={project.title} />
                {/*          <p className="github-p">Check out my code for the project:</p>
                <Card.Text>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </Card.Text> */}
                <Link
                  to={`/projects/${project.id}`}
                  className="btn btn-primary"
                >
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

export default Projects;
