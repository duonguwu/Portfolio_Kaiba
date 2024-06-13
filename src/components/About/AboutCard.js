import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Duong Kaiba </span>
            from{" "}
            <span className="purple">
              {" "}
              University of Information Technology - VNUHCM
            </span>
            <br />
            I'm Nguyen Duong, a third-year student majoring in Information
            Systems at the University of Information Technology - Vietnam
            National University, HCMC. Passionate about technology and its
            applications, I'm on a journey to become a Backend Developer.
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life doesn't give you what you know, it rewards you for what you
            do."{" "}
          </p>
          <footer className="blockquote-footer">Napoleon Hill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
