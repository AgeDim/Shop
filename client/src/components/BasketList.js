import React, {useContext, useState} from 'react';
import {Row} from "react-bootstrap";
import {Context} from "../index";
import BasketItem from "./BasketItem";
import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import BasketPage from "../pages/BasketPage";

const BasketList = observer(({calcPrice, basket}) => {
    const [card, setCard] = useState(basket.prod)
    const deleteFromBasket = (id) => {
        basket.setProdukt(basket.prod.filter((product) => id !== product.id))
        basket.setGenPrice(basket.calcGenPrice())
        calcPrice()
    }

    return (
        <Row className="me-auto" style={{display: 'flex'}}>
            {basket.prod.map(product => <BasketItem key={product.id} deleteFromBasket={deleteFromBasket} basketItem={product}/>)}
        </Row>
    );
});

BasketList.propTypes = {
    onChange: PropTypes.func
};

export default BasketList;