import React, {useContext} from 'react';
import {FiTrash2} from "react-icons/fi";
import {Card, Col, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import holder from "../assets/holder.png"

const BasketItem = observer(({basketItem, deleteFromBasket}) => {
    const {product} = useContext(Context)
    const arr = product.allProd
    const prod = arr.find(produc => produc.id === basketItem.id)
    return (<Card style={{marginLeft: 40, marginTop: 10, height: 170, paddingTop: 5, paddingBottom: 5}}>
        <Row className="flex-fill">
            <Col md={1} className="align-self-center">
                <FiTrash2 className="align-self-center" onClick={() => {
                    deleteFromBasket(basketItem.id)
                }} style={{cursor: "pointer", color: "red"}} size={30}/>
            </Col>
            <Col className="d-flex justify-content-start">
                <Row><Image style={{width:150, height:150}} src={`data:image/jpeg;base64,${prod.img}`}/></Row>
                <Row><h2>{basketItem.price} руб.</h2>
                    <h2>{prod.name}</h2>
                    <h2>Кол-во: {basketItem.amount}</h2></Row>
            </Col>
        </Row>
    </Card>);
});

export default BasketItem;