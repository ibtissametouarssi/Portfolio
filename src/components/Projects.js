import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg3 from "../assets/img/project-img1.jfif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Test creation application",
      description: "From August 2023 to September 2023 This project aims to automate the creation of tests Technologies used: Express.js, Vue.js, MySQL",
      imgUrl: projImg3,
    },
    {
      title: "Automated solution for creating e-commerce sites",
      description: "From April 2023 to June 2023 This project aims to automate the creation of e-commerce sites using the JamStack architecture with Gatsby and the WordPress CMS. Technologies used: Node.js, GatsbyJs, WordPress, WooCommerce, Docker Compose, Bedrock, GraphQL",
      imgUrl: projImg3,
    },
    {
      title: "Mini-Market",
      description: "2022 a mini-Market, based on HTML, JS, CSS, PHP, MySQL, AJAX, Bootstrap, jQuery technologies",
      imgUrl: projImg3,
    },
    {
      title: "Billing",
      description: "From November 2023 to January 2024 a management system billing. Technologies used: Spring Boot, MongoDB, Angular",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Passionate about technological innovation, I have carried out various projects ranging from test automation to the creation of e-commerce solutions, using technologies such as Express.js, Vue.js, and Spring Boot. Each project reflects my commitment to solving complex problems and my ability to master new technologies quickly.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab </Nav.Link>
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