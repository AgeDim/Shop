import React, {useContext} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Context} from "../index";

const OrderItem = ({order}) => {
    const {product} = useContext(Context)
    const prod = product.products.filter(function (v) {
        return order.products.some(function (v2) {
            return v.id === v2.id;
        })
    });
    const getGenPrice = () => {
        let res = 0
        prod.map(product => {
            order.products.map(prod => {
                if (product.id === prod.id) {
                    res += prod.amount * product.price
                }
            })
        })
        return res
    }

    return (
        <Card className="d-flex">
            <Row className="g-0">
                <Col md={2} style={{marginLeft: 5}} className="d-flex">
                    <h3>Id заказа:</h3><h4 style={{marginTop: 5}} className="start-0">{order.id}</h4>
                </Col>
                <Col md={3} style={{ paddingLeft: 10}} className="d-flex">
                    <h3 className="d-flex">Сумма заказа: {getGenPrice()}</h3>
                </Col>
                <Col md={3}>
                    {prod.map(product => order.products.map(prod => {
                        if (product.id === prod.id){<h2>{product.name} x {prod.amount}</h2>}}))}
                </Col>
                <Col md={2} className="d-flex">
                    <h4>Дата заказа: {order.time}</h4>
                </Col>
            </Row>
        </Card>
    );
};

export default OrderItem;