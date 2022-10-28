import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";

const ProductList = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row>
            {product.products.map(product =>
                <ProductItem key={product.id} device={product}/>)}
        </Row>
    );
});

export default ProductList;