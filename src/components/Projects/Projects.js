import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import portfolio from "../../Assets/Projects/portfolio.jpg";
import todo from "../../Assets/Projects/todo.jpg";
import calculator from "../../Assets/Projects/calculator.jpg";

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
              imgPath={todo}
              isBlog={false}
              title="Todo Application"
              description="Developed a CRUD-based task management app using React.js with dynamic UI updates and local storage for data persistence.
               Implemented responsive design using CSS & Bootstrap and improved user experience with JavaScript event handling.
"
              ghLink="https://github.com/yamuna2023/React_Todo_Application.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Developed a responsive Calculator web app using JavaScript, HTML, and CSS to perform basic arithmetic operations.
Focused on clean UI design and interactive functionality using DOM manipulation and custom styling."
              ghLink="https://github.com/yamuna2023/Javascript_Caclulator.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This portfolio is built using ReactJS, showcasing a modular and reusable component-based architecture.
It includes interactive sections such as About Me, Projects, Skills, and Contact.
React Router is used for smooth navigation between pages without reloading.
Styled with Tailwind CSS to ensure responsive and visually appealing design.
The portfolio is fully dynamic and easy to maintain or scale as needed. "
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="This eCommerce website is built using ReactJS, providing a fast and dynamic user experience.
It features product listings, cart functionality, and secure checkout using reusable components.
Integrated with React Router and state management (like Redux or Context API) for seamless navigation and performance..
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
