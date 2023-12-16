import { Container, Row, Col } from "react-bootstrap";
import priveran1 from "../assets/img/priveran1.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6}>
                <div className="footer-logo">
                    <img src={priveran1} alt="Logo" />
                </div>
            </Col>
            <Col xs={12} md={6}>
    
            <p >Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
