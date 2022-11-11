import React from 'react';
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import {useHistory} from "react-router-dom";

const ShopPage = () => {
    return (<Row className="g-0">
        <Col md={1} className="mt-4" style={{width: 270}}>
            <TypeBar/>
        </Col>
        <Col md={10}>
            <h1> Здесь должна быть ваша реклама и paging</h1>
            <ProductList></ProductList>
        </Col>
    </Row>);
};

export default ShopPage;