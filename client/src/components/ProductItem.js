import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

const ProductItem = ({product}) => {
    return (<Col md={4} style={{width:300, margin:3}}>
            <Row className="g-0" ><Card style={{width: 300,height: 300, margin:1, borderRadius: 25, padding: 7}}>ЧЛЭН</Card></Row>
    </Col>);
};

export default ProductItem;