import { Container, Row, Col, Button } from "react-bootstrap";
import Chrissy from "../assets/chrissy.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <Container className="hero-container">
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className="hero-content">
              <h1 className="hero-title">Hi, I'm Christine.</h1>
              <p className="hero-subtitle">
                I'm in love with the world of code.
              </p>
              <Button href="/contact" variant="primary" className="hero-button">
                Get in Touch
              </Button>
              {/*     <Button
                href="https://www.linkedin.com/in/christine-nilsson-82536267/"
                variant="primary"
                className="hero-button"
              >
                Let's connect!
              </Button> */}
            </div>
          </Col>
          {/*       <Col lg={6} md={6} sm={12}>
            <div className="hero-image">
              <img src={Chrissy} alt="illustration" className="chrissy-img" />
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
