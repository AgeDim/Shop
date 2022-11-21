import React, {useContext, useEffect, useState} from 'react';
import BasketList from "../components/BasketList";
import {Card, Col, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BasketPage = observer(() => {
    const {basket} = useContext(Context)
    let res = 0;
    const [card, setCard] = useState(basket.prod)
    const calcPrice = () => {
        res = 0;
        basket.prod.map(product => {res += product.price * product.amount})
        basket.setGenPrice(res)
    }
    useEffect(() => {calcPrice()
        console.log(res)},[basket.prod])
    calcPrice()
    return (<Row className="g-0">
        <Row><Card style={{marginLeft: 20, marginRight: 20}}>
            <div className="d-flex align-items-center"><h1 style={{marginTop: 5, marginBottom: 5}}>Моя Корзина</h1><h2
                style={{margin: 0, marginLeft: 30}}>Всего: {res}</h2></div>
        </Card></Row>
        <Col md={6}><BasketList calcPrice={calcPrice} basket={basket}></BasketList></Col>
        <Col md={5}></Col>
    </Row>);
});

export default BasketPage;