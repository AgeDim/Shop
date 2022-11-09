import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/const";
import "./css/ProductItem.css"

const ProductItem = ({product}) => {
    const history = useHistory()
    return (<Col md={4} style={{width: 300, margin: 3}}>
        <Row className="g-0">
            <div id="productCard">
                <Card onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}
                      style={{width: 300, height: 300, margin: 1, borderRadius: "10% 10% 0% 0%", padding: 7}}></Card>
                <Card style={{
                    width: 300, height: 50, margin: 1, borderRadius: "0% 0% 30% 30%", padding: 7
                }}>{product.name}</Card></div>
        </Row>
    </Col>);
};

export default ProductItem;