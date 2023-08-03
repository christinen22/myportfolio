import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Resume: React.FC = () => {
  return (
    <section className="resume-section" id="resume">
      <Container>
        <h2 className="resume-title">My Resume</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="resume-card">
              <Card.Body>
                <h3 className="resume-card-title">Education</h3>
                <h4 className="resume-card-subtitle">Front end developer</h4>
                <p className="resume-card-text">Medieinstitutet 2022-2024</p>
                <h4 className="resume-card-subtitle">Accounting economist</h4>
                <p className="resume-card-text">
                  IHM Business school 2011-2013
                </p>

                <h3 className="resume-card-title mt-4">Experience</h3>
                <h4 className="resume-card-subtitle">
                  Web development, internship
                </h4>
                <p className="resume-card-text">Intervaro 2023/10 - 2023/12</p>
                <ul className="resume-card-list">
                  <li>...</li>
                  <li>...</li>
                  <li>...</li>
                </ul>
                <h4 className="resume-card-subtitle">IT, accounting.</h4>
                <p className="resume-card-text">
                  Fastighetsägarna Syd, 2017-2022
                </p>
                <ul className="resume-card-list">
                  <li>Business systems specialist</li>
                  <li>Member services</li>
                  <li>Handle invoices</li>
                </ul>
                <h4 className="resume-card-subtitle">Accounting</h4>
                <p className="resume-card-text">Tactel AB, 2014-2017</p>
                <ul className="resume-card-list">
                  <li>Accounting</li>
                  <li>Payroll management</li>
                  <li>Monthly financial statements</li>
                </ul>

                <h3 className="resume-card-title mt-4">Skills</h3>
                <ul className="resume-card-list">
                  <li>JavaScript</li>
                  <li>Typescript</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>HTML5, CSS3</li>
                  <li>Git</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
