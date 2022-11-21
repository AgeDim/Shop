import React, {useContext, useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const ShopPage = observer(() => {
    return (<Row className="g-0">
        <Col md={1} className="mt-4" style={{width: 250}}>
            <TypeBar/>
        </Col>
        <Col md={10}>
            <h4> Здесь должна быть ваша реклама и paging</h4>
            <ProductList></ProductList>
        </Col>
    </Row>);
});

export default ShopPage;