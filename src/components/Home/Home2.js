import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I'm a senior Information Systems student at the University of Information Technology - Vietnam National University, HCMC, with a strong passion for AI/ML, Data Science, and backend development.
  <br />
  <br />
  As a research student in the university’s lab, I have deep expertise in machine learning and deep learning, particularly in computer vision. My background includes developing and optimizing AI models to solve complex problems using cutting-edge deep learning algorithms.
  <br />
  <br />
  I have strong skills in 
  <i>
    <b className="purple">Python, Java, and PHP</b>
  </i>, 
  and experience with frameworks like 
  <i>
    <b className="purple">Flask, Spring, and Laravel</b>
  </i>. 
  Additionally, I have a solid foundation in 
  <i>
    <b className="purple"> ReactJS </b>
  </i> 
  for creating robust server-side applications.
  <br />
  <br />
  Looking forward, I aim to become a Data Engineer, where I can leverage my skills to design and optimize data pipelines. I have experience with 
  <i>
    <b className="purple">DevOps tools</b>
  </i> 
  like 
  <i>
    <b className="purple"> Docker</b>
  </i>, 
  <i>
    <b className="purple"> nginx</b>
  </i>, 
  and 
  <i>
    <b className="purple"> Microsoft Azure </b>
  </i> 
  to deploy and manage applications efficiently. My goal is to ensure data integrity and accessibility for various analytical and machine learning purposes.
</p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/duonguwu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/ngdw.04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/duongkaiba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ngdw_04"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
