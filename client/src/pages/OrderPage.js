import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {getOrders} from "../http/orderAPI";
import OrderItem from "../components/OrderItem";
import {Row} from "react-bootstrap";

const OrderPage = () => {
    const {user} = useContext(Context)
    const orders = [{id:123,userEmail:12312, products:[], time: 1313},{},{}]
    useEffect(() => {
        if(user.isAuth){getOrders(user.email)}

    }, [])
    return (
        <Row>
            {orders.map(order => {<OrderItem order={order}/>})}</Row>
    );
};

export default OrderPage;