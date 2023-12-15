import { Container, Row, Col } from "react-bootstrap";
import priveran1 from "../assets/img/priveran1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

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
                <div className="footer-social">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                </div>
    
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
