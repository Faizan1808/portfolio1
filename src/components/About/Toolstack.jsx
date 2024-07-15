import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tool-stack">VSCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tool-stack">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <div className="tool-stack">Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="tool-stack">Vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
