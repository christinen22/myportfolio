import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Container className="footer">
      <Row>
        <Col lg={6} md={6} sm={12} className="footer-col">
          <div className="footer-content">
            <h3>Contact Info</h3>
            <p>Email: christine.elin.louise@gmail.com</p>
            <p>Phone: (+46) 735 03 05 94</p>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="footer-col">
          <h3>Connect with me</h3>
          <p>Follow me on:</p>
          <ul className="social-media-list">
            <li className="social-media-li">
              <a
                href="https://github.com/christinen22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li className="social-media-li">
              <a
                href="https://www.linkedin.com/in/christine-nilsson-82536267/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
