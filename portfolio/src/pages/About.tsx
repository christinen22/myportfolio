import { Container, Col } from "react-bootstrap";
import Chrissy from "../assets/chrissy.png";

const About = () => {
  return (
    <section id="about">
      <Container className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <Col
          lg={true}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="sm:text-4xl text-3xl mb-4 resume-title">
            Hi, I'm Christine.
          </h1>
          <h3 className="resume-card-title">
            <br className="hidden lg:inline-block" />a passionate individual on
            a journey of creative transformation.
          </h3>

          <img src={Chrissy} alt="illustration" className="chrissy-img" />
          <p className="mb-8 about-text">
            <span>
              With a dynamic background in accounting and administration, I've
              embarked on an exciting new path as a dedicated web developer. My
              current focus is on frontend development, yet my curiosity extends
              to the realms of backend and API integration.
            </span>
            <br />
            <br />
            <span>
              I find joy in crafting digital experiences that resonate with
              users, just as I've always strived to create efficient and
              organized financial systems. This transition allows me to merge my
              love for problem-solving and creativity, enabling me to construct
              both visually appealing and functional websites that leave a
              lasting impression.
            </span>
            <br />
            <br />
            <span>
              Beyond coding, my interests are as diverse as my skill set. From
              knitting threads into beautiful patterns to cultivating lush
              greenery. When I'm not immersed in lines of code, you can find me
              conquering virtual realms in board and video games, or simply
              enjoying quality moments with friends and family.
            </span>
            <br />
            <br />
            <span>
              I believe that my diverse background not only enriches my
              perspective but also empowers me to approach web development with
              a unique blend of precision, creativity, and adaptability. As I
              continue to hone my frontend skills and explore the backend
              landscape, I'm excited to contribute my multifaceted talents to
              the ever-evolving digital landscape.
            </span>
            <br />
            <br />
            <span>Thank you for taking a moment to learn more about me.</span>
          </p>
        </Col>
      </Container>
    </section>
  );
};

export default About;
