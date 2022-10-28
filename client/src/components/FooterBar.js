import React from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {LOGIN_ROUTE} from "../utils/const";

const FooterBar = () => {
    return (
        <Navbar style={{position: "fixed", bottom: 0, width: "100%"}} bg="light">
            <Nav className="justify-content-end" style={{width:"100%"}}>
                <Row className="m-lg-1">
                    <Col className="d-flex align-self-end">example@example.com</Col>
                    <Col className="d-flex align-self-end">+7 (123) 1231212</Col>
                </Row>
            </Nav>
        </Navbar>

    );
};

export default FooterBar;