import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,

} from "react-icons/di";
import {
  SiNextdotjs,
  SiMysql,
  SiFlutter,
  SiDjango  
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-stack">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-stack">ReactJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-stack">NodeJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div className="tech-stack">NextJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-stack">Git Hub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-stack">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
        <div className="tech-stack">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiArtificialIntelligence />
        <div className="tech-stack">Artificial Intelligence</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-stack">Mysql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="tech-stack">Mongodb</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <div className="tech-stack">Flutter</div>
      </Col>
    </Row>
  );
}

export default Techstack;
