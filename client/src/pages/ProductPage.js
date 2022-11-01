import React from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";

import back from "../assets/back.png";
import pik from "../assets/row1.jpg";
import backet from "../assets/backetBtn.png";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import Counter from "../components/Counter";

const ProductPage = () => {
    const history = useHistory()
    const id = window.location.pathname[window.location.pathname.length - 1]
    const productState = useSelector(state => state.products)
    const product = productState.products.find(product => product.id == id)
    return (
        <Card className="m-5 align-self-center" style={{height: 680}}>
            <Row className="align-content-start"><Button className="p-2" style={{
                background: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(0, 0, 0, 0)",
                width: 240
            }} onClick={() => history.goBack()}><img
                src={back}/></Button></Row>

            <Row>
                <Col md={7} className="d-flex"><Image src={pik} width={450} height={450}
                                                      style={{marginLeft: 50, marginTop: 20, borderRadius: 20}}></Image></Col>
                <Col md={4} className="d-flex">
                    <Col id="123">
                        <Row>
                            <h2>{product.name}</h2>
                        </Row>
                        <Row>
                            <h3>{product.price} РУБ</h3>
                            <h5 style={{paddingBottom: 100}}>{product.description}</h5>
                        </Row>
                        <Row><Counter product={product}/></Row>
                        <Row style={{paddingTop:50}}>
                            <Button className="p-2" style={{
                                background: "rgba(0, 0, 0, 0)",
                                borderColor: "rgba(0, 0, 0, 0)",
                                width: 240
                            }}><img
                                src={backet}/></Button>
                        </Row>
                    </Col>
                </Col>
            </Row>
        </Card>
    );
};

export default ProductPage;