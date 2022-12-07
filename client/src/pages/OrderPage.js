import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {getOrders} from "../http/orderAPI";
import OrderItem from "../components/OrderItem";
import {Row} from "react-bootstrap";

const OrderPage = () => {
    const {user, orders} = useContext(Context)
    useEffect(() => {
        if(user.isAuth){getOrders(user.user.email)}

    }, [])
    return (
        <Row className="g-0">
            {orders.orders.map(order => <OrderItem order={order}/>)}</Row>
    );
};

export default OrderPage;