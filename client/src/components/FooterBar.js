import React from 'react';
import {Col, Nav, Navbar, Row} from "react-bootstrap";

const FooterBar = () => {
    return (<Navbar id="footer" bg="light" style={{position: "fixed", bottom: 0, width: "100%", height: 25}}>
            <Nav className="justify-content-end" style={{width: "100%"}}>
                <Row className="m-lg-1">
                    <Col className="d-flex align-self-end">lokki0900@mail.ru</Col>
                    <Col className="d-flex align-self-end">+7 (999) 2151627</Col>
                </Row>
            </Nav>
        </Navbar>

    );
};

export default FooterBar;