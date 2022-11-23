import React from 'react';
import {Row} from "react-bootstrap";
import BasketItem from "./BasketItem";
import {observer} from "mobx-react-lite";

const BasketList = observer(({calcPrice, basket}) => {
    const deleteFromBasket = (id) => {
        basket.setProdukt(basket.prod.filter((product) => id !== product.id))
        basket.setGenPrice(basket.calcGenPrice())
        calcPrice()
    }

    return (
        <Row className="me-auto" style={{display: 'flex'}}>
            {basket.prod.map(product => <BasketItem key={product.id} deleteFromBasket={deleteFromBasket}
                                                    basketItem={product}/>)}
        </Row>
    );
});

export default BasketList;