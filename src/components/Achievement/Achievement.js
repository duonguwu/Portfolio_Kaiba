import React from "react";
import AchievementCard from "./AchievementCard";
import { Container, Row, Col } from "react-bootstrap";

function Achievement() {
  const achievements = [
    {
      title: "Nghiên cứu khoa học sinh viên 2023",
      image:
        "https://res.cloudinary.com/dupkiibar/image/upload/v1715017006/Screenshot_2024-05-07_003245_ry8sky.png",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở năm 3",
      image:
        "https://res.cloudinary.com/dupkiibar/image/upload/v1715017006/439866623_871030528396286_316457587853116090_n_v5rkab.jpg",
    },
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở năm 2",
      image:
        "https://res.cloudinary.com/dupkiibar/image/upload/v1715016870/350328543_187126157627664_3598845343400885726_n_dznhcb.jpg"},
    {
      title: "Xếp loại Giỏi trong học tập và rèn luyện ở năm 1",
      image:
        "https://res.cloudinary.com/dupkiibar/image/upload/v1715016869/283666389_5098844180208081_3462415580769201489_n_1_vx8nzr.jpg"},
    // Thêm các thành tích khác nếu cần
  ];

  return (
    <Container fluid className="achievement-section">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="achievements">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                description={achievement.description}
                image={achievement.image}
              />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Achievement;
