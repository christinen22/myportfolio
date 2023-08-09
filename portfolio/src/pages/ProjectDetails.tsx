import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProject } from "../services/api";
import { IProject } from "../types";

interface ProjectDetailProps {
  id: string | undefined;
  [key: string]: string | undefined;
}

const ProjectDetails = () => {
  const [project, setProject] = useState<IProject | null>(null);
  const { id } = useParams<ProjectDetailProps>();

  useEffect(() => {
    const fetchProject = async () => {
      const res = await getProject(Number(id));
      setProject(res.data);
      console.log(res.data);
    };
    fetchProject();
  }, [id]);

  const renderWithLineBreaks = (text: string | undefined) => {
    return text?.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <Container>
      <h1 className="mt-5 blog-h1">{project?.title}</h1>
      <Card>
        <Card.Body>
          <Card.Title>{project?.title}</Card.Title>
          <Card.Text>{renderWithLineBreaks(project?.description)}</Card.Text>
          <Card.Img src={project?.image} alt={project?.title} />
          <p className="github-p">Check out my code for the project:</p>
          <Card.Text>
            <a href={project?.link} target="_blank" rel="noopener noreferrer">
              {project?.link}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectDetails;
