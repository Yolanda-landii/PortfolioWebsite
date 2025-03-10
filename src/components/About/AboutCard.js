import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">Yolanda Mabotja</span>, a dedicated Full Stack Developer 
            with a strong background in mobile and web application development. I specialize in 
            <i className="primary-header"> JavaScript, React.js, React Native, Node.js, MongoDB, and Firebase</i>. 
            I have a proven track record of creating dynamic and responsive user interfaces, developing robust 
            server-side applications, and ensuring seamless integration between front-end and back-end systems.
            <br />
            <br />
            I am passionate about building high-quality, scalable, and efficient solutions that enhance user 
            experiences and drive business success. My deep interest in technology, particularly in 
            <i className="primary-header"> payment services through tech</i>, motivates me to explore and implement 
            innovative solutions.
            <br />
            <br />
            I thrive in environments that encourage <i className="primary-header">innovation, collaboration, and problem-solving</i>. 
            My experience in decision-making, communication, and software development has helped me become 
            an asset to any team. I aim to contribute to meaningful projects and make a lasting impact 
            in a dynamic work environment.
            <br />
            <br />
          </p>
    
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
