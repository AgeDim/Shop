import React from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {PRODUCT_ROUTE} from "../utils/const";
import "./css/ProductItem.css"
import {observer} from "mobx-react-lite";

const ProductItem = observer(({product}) => {
    const history = useHistory()
    return (<Col md={4} style={{width: 310, margin: 1}}>
        <Row className="g-0">
            <div id="productCard">
                <Card onClick={() => history.push(PRODUCT_ROUTE + '/' + product.id)}
                      style={{width: 310, height: 280, borderRadius: "7% 7% 7% 7%", padding: 7, cursor: "pointer"}}>
                    <Image src="https://via.placeholder.com/250x200"></Image>
                    <div className="text-center" style={{paddingTop: 5}}>{product.name}</div>
                </Card>
            </div>
        </Row>
    </Col>);
});

export default ProductItem;