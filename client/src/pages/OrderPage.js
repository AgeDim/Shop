import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {getOrders} from "../http/orderAPI";
import OrderItem from "../components/OrderItem";
import {Row} from "react-bootstrap";

const OrderPage = () => {
    const {user} = useContext(Context)
    const {orders} = useContext(Context)
    const setter = (ord) => {
        orders.setOrders(ord)
    }
    if (user.isAuth) {
        getOrders(user.user.email, setter)
    }
    console.log(orders.orders)
    return (
        <Row className="g-0">
            {orders.orders.map(order => (<OrderItem key={order} order={order}/>))}
        </Row>
    );
};

export default OrderPage;