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
            I am an enthusiastic Information Systems student with a strong
            passion for cutting-edge technology, particularly Artificial
            Intelligence.
            <br />
            My profound interest in technology extends into data-related fields,
            particularly computer vision, where I've gained experience in
            processing images. I specialize in object detection and recognition,
            primarily utilizing YOLO series.
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
