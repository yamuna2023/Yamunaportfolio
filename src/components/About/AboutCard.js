import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yamuna Mamidisetti </span>
            from <span className="purple"> Andhra Pradesh , India.</span>
            <br />
            I am a fresher currently pursuing M.Tech, graduating in 2025.
            <br />
            I have completed my M.Tech in Computer Science and Engineering (CSE) at Swarnandhra Engineering College.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yamuna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
