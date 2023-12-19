import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import projImg4 from "../assets/img/img4.png";
import projImg5 from "../assets/img/img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: <a href="https://paolaar.github.io/LandingPage/"> Landing Page English Class </a>,
      description: "Development of an interface using HTML and CSS.",
      imgUrl: projImg1,
    },
    {
      title: <a href="https://paolaar.github.io/ProyectoCrud/"> CRUD Travel </a>,
      description: "Structured CRUD Operations Application under a Programming Paradigm.",
      imgUrl: projImg2,
    },
    {
      title: <a href="https://paolaar.github.io/Dashboard/"> Movies Dashboard </a>,
      description: "Top Rated Movies Data Application with API connection and interface design.",
      imgUrl: projImg3,
    },
    {
      title:<a href="https://paolaar.github.io/my-restaurant-app/"> Restaurant Empanados App </a>,
      description: "Web Application using React, Vite and Firebase.",
      imgUrl: projImg4,
    },
    {
      title: <a href="https://paolaar.github.io/fullstack-ecommerce/"> Ecommerce Mugs</a>,
      description: "App Fullstack using MongoDB, Express, React Y NodeJs.",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>"I have successfully completed a rigorous Full Stack Web Developer bootcamp where I designed and implemented several impactful projects. Leveraging my proficiency in a lot fo technologies, I developed dynamic and responsive web applications that showcase my ability to create engaging user experiences.<br></br>
                    These projects are hosted on my GitHub page, providing a hands-on demonstration of my coding skills and problem-solving capabilities.<br></br>
                    Feel free to explore these projects on my <a href="https://github.com/PaolaaR/">GitHub repository</a> "
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
