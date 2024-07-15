import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MD. Faizan Ansari </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently employed as a Associate Software Engineer at Plural Technology.
            <br />
            I have completed Graduaction BCA (Bachelor of Computer Applications ) from Osmania University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always try to learn new technology and Try to Implementing the Knowledge to create new projects"{" "}
          </p>
          <footer className="blockquote-footer">Faizan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
