import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import ShoppingList from "../../Assets/Projects/shoppingList.png";
import Hotelbooking from "../../Assets/Projects/HotelApp.png";
import RecipeApp from "../../Assets/Projects/RecipeFinder.png";
import EmployeeApp from "../../Assets/Projects/employeeApp.png";
import Restaurent from "../../Assets/Projects/ExpenseTracker.png";
import GroupProjectImg from "../../Assets/undraw_code_review_l1q9.svg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={RecipeApp}
              title="Recipe Application"
              description="A React.js-based online recipe management app that allows users to store, organize, and share their favorite recipes. The app supports user authentication, CRUD operations for recipes, and search functionality based on name and category. Built with a JSON server for backend data storage, it ensures a seamless user experience with an intuitive UI and responsive design."
              ghLink="https://github.com/your-repo-link"
              demoLink="https://your-demo-link"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Hotelbooking}
              title="Hotel Booking App"
              description="An interactive hotel booking application built with React and Firebase, featuring a client and admin interface. Users can register, browse accommodations with photos, maps, and amenities, book rooms with secure payments, and manage their profiles. Admins can manage listings, reservations, and pricing in real time. Implements Firebase Authentication, Firestore, and Redux for state management, ensuring a seamless and responsive user experience."
              ghLink="https://github.com/rahuljha4171/Portfolio-Website"
              demoLink="https://rahuljha.info/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ShoppingList}
              title="Shopping List App"
              description="A React.js-based shopping list application that allows users to create, manage, and track multiple shopping lists. The app features authentication, CRUD operations for shopping lists, search and sorting functionality, and Redux for state management. Built with a JSON server for data persistence, ensuring a smooth and responsive user experience."
              ghLink="https://github.com/your-repo-link"
              demoLink="https://your-demo-link"
            />
          </Col>

          {/* <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={EmployeeApp}
              title="Employee Management App"
              description="A React.js-based admin portal that allows organizations to manage employee records efficiently. Features include CRUD operations for employee data, search and filtering options, and local storage for data persistence. The app provides a user-friendly, responsive interface with intuitive navigation and an aesthetically pleasing design."
              ghLink="https://github.com/your-repo-link"
              demoLink="https://your-demo-link"
            />
          </Col> */}
        </Row>

        {/* Group Projects Section */}
        <h1 className="project-heading">
          Group <strong className="Fluorescent-Blue">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", alignItems: "center", paddingBottom: "10px" }}>
        <Col md={7} className="project-card">
  <ProjectCard
    imgPath={Restaurent}
    title="Task 28 - React Native Restaurant Reservation App"
    description="A team-based project aimed at building a restaurant reservation platform with an admin dashboard. Users can view, search, and make reservations, while restaurant admins can manage their restaurant details, reservations, and analyze data through charts. Built using React Native for the front end, Node.js and MongoDB for the backend, with features like authentication, payment integration, feedback, and mobile responsiveness."
    ghLink="https://github.com/your-repo-link"
    demoLink="https://your-demo-link"
  >
    <div className="project-details">
      <h3 className="project-subheading">Project Details</h3>
      <ul>
        <li><strong>Team Members:</strong> [Mabohlale Nkuna, Yolanda Mabotja]</li>
        <li><strong>Tech Stack:</strong> React Native, Node.js, MongoDB, Firebase, Stripe Payment Gateway</li>
        <li><strong>Key Features:</strong>
          <ul>
            <li>User interface for browsing and reserving restaurants</li>
            <li>Admin dashboard for managing restaurants and reservations</li>
            <li>Real-time updates and notifications for users and admins</li>
            <li>Payment integration for online reservations</li>
            <li>Mobile-responsive design for easy access from any device</li>
          </ul>
        </li>
        <li><strong>Collaboration Experience:</strong> The team worked collaboratively using Scrum for project management and Trello for task tracking. Regular standups and sprint reviews were held to ensure smooth communication and timely delivery of features.</li>
      </ul>
    </div>
  </ProjectCard>
</Col>

          <Col md={5} className="project-img">
            <img
              src={GroupProjectImg}
              alt="Group Project"
              className="img-fluid"
              data-aos="fade-left"
            />
          </Col> 
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
