import React, {useContext, useState} from 'react';
import {Button, Card, Col, Image, Row} from "react-bootstrap";

import back from "../assets/back.png";
import pik from "../assets/row1.jpg";
import backet from "../assets/backetBtn.png";
import {useHistory} from "react-router-dom";
import Counter from "../components/Counter";
import "./css/productPage.css"
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const ProductPage = observer(() => {
    const history = useHistory()
    const id = window.location.pathname[window.location.pathname.length - 1]
    const {product} = useContext(Context)
    const prod = product.products.find(product => product.id == id)
    const {basket} = useContext(Context)

    const addProductToBasket = () => {
        basket.addProducts({id:prod.id, amount: document.getElementById("counterVal").innerText, price: prod.price})
    }
    // TODO Карзине пизда оно не работает
    return (<Card className="align-self-center" style={{height: 590, marginTop:10, marginRight: 20, marginLeft: 20}}>
        <Row className="align-content-start"><Button id="btn" className="p-2" variant="outline-light" style={{
            background: "rgba(0, 0, 0, 0)", borderColor: "rgba(0, 0, 0, 0)", width: 240, marginLeft: 5
        }} onClick={() => history.goBack()}><img
            src={back}/></Button></Row>

        <Row>
            <Col md={7} className="d-flex justify-content-center"><Image src={pik} width={450} height={450}
                                                                         style={{
                                                                             marginLeft: 50,
                                                                             marginTop: 20,
                                                                             borderRadius: 20
                                                                         }}></Image></Col>
            <Col md={4} className="d-flex">
                <Col id="123">
                    <Row>
                        <h2>{prod.name}</h2>
                    </Row>
                    <Row>
                        <h3>{prod.price} РУБ</h3>
                        <h5 style={{paddingBottom: 100}}>{prod.description}</h5>
                    </Row>
                    <Row><Counter product={prod}/></Row>
                    <Row style={{paddingTop: 50}}>
                        <Button className="p-2" onClick={addProductToBasket} style={{
                            background: "rgba(0, 0, 0, 0)", borderColor: "rgba(0, 0, 0, 0)", width: 240
                        }}><img
                            src={backet}/></Button>
                    </Row>
                </Col>
            </Col>
        </Row>
    </Card>);
});

export default ProductPage;