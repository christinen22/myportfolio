import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Container className="footer">
      <Row className="footer-row">
        <Col lg={6} md={6} sm={12} className="footer-col">
          <div className="footer-content">
            <h3>Contact Info</h3>
            <p>Email: christine.elin.louise@gmail.com</p>
            <p>Phone: (+46) 735 03 05 94</p>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="footer-col">
          <h3>Connect with me</h3>

          <ul className="social-media-list">
            <li className="social-media-li">
              <a
                href="https://github.com/christinen22"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-a"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li className="social-media-li">
              <a
                href="https://www.linkedin.com/in/christine-nilsson-82536267/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-a"
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
