
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Silverile from "../../Assets/Projects/Silverile.png";
import SD from "../../Assets/Projects/SD.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Silverile}
              isBlog={false}
              title="SilverIle(Agile Management Tool)"
              description="An AI/ML-based project management platform. Developed a project management platform using ReactJS, JavaScript, HTML, CSS, and Bootstrap. Enhanced efficiency with real-time project tracking, task automation, and resource optimization. "
              ghLink="https://www.silverile.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SD}
              isBlog={false}
              title="Structured Data"
              description="Structured Data is an application with a frontend developed using JavaScript logic. It incorporates third-party libraries for additional features and integrates data via APIs, ensuring a robust and feature-rich user experience."

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SD}
              isBlog={false}
              title="Change Management Tool"
              description="Create a web page with five buttons or tabs, each representing a table. Use JavaScript event listeners to handle button clicks. When a button is clicked, fetch and display the corresponding data in a designated section of the page. This can be done using AJAX or Fetch API for data retrieval."            
            />
          </Col>      
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
