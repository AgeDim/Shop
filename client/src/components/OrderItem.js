import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const OrderItem = observer(({order}) => {
    const res = Object.entries(order.prodNameToAmount)
    const map = new Map();
    map.set(1, 'inProcess')
    map.set(2, 'done')
    map.set(3, 'fail')
    return (<Card className="d-flex g-0" style={{marginTop: 2, marginButton: 2}}>
        <Col className="d-flex">
            <Row><h3 style={{marginRight: 15, width: 230}}>Id заказа: {order.id}</h3></Row>
            <Row><h3 style={{marginRight: 15, width: 300}}>Сумма заказа: {Math.round(order.cost)}</h3></Row>
            <Row><h4 style={{marginRight: 15, width: 340}}>Дата заказа: {order.time.replaceAll('-',' ').split('T')[0]}</h4></Row>
            <Row md={1} style={{width: 460, marginLeft: 10}}>
                {res.map((key, value) => (<h4>{key[0]} x {key[1]}</h4>))}
            </Row>
            <h4 style={{width:250}}>Status: {map.get(order.status)}</h4>
        </Col>
    </Card>);
});

export default OrderItem;