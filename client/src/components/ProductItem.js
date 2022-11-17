import React from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/const";
import "./css/ProductItem.css"

const ProductItem = ({product}) => {
    const history = useHistory()
    return (<Col md={4} style={{width: 310, margin: 1}}>
        <Row className="g-0">
            <div id="productCard">
                <Card onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}
                      style={{width: 310, height: 300, borderRadius: "7% 7% 0% 0%", padding: 7, cursor: "pointer"}}>
                    <Image src="https://via.placeholder.com/250x200"></Image>
                    <div className="text-center">{product.name}</div>
                </Card>
            </div>
        </Row>
    </Col>);
};

export default ProductItem;