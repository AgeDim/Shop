import React from 'react';
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";


const ProductList = observer(({product}) => {
    return (<Row className="me-auto" style={{display: 'flex'}}>
        {product.map(product => <ProductItem key={product.id} products={product}/>)}
    </Row>);
});

export default ProductList;