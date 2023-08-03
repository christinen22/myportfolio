import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-content">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">
                Do you have a question or want to work together? Feel free to
                reach out!
              </p>
              <br />
              <Form
                action="https://formspree.io/your-email@example.com"
                method="POST"
              >
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="_replyto"
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
