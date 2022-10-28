import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={1} className="mt-4 me-auto">
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <h1> Здесь должна быть ваша реклама и paging</h1>
                    <ProductList></ProductList>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;