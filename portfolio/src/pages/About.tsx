import { Container, Row, Col } from "react-bootstrap";
import Chrissy from "../assets/chrissy.png";

const About = () => {
  return (
    <section id="about">
      <Container className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <Col
          lg={true}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl mb-4">
            Hi, I'm Christine.
            <br className="hidden lg:inline-block" />I love to code and build
            apps!
          </h1>
          <img src={Chrissy} alt="illustration" className="chrissy-img" />
          <p className="mb-8 about-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum
            cupiditate voluptas? Laborum, voluptas natus?Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Qui laborum quasi, incidunt
            dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          </p>
        </Col>
      </Container>
    </section>
  );
};

export default About;
