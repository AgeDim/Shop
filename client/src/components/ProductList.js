import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {getProductByType} from "../http/productAPI";


const ProductList = observer(({product}) => {
    return (<Row className="me-auto" style={{display: 'flex'}}>
        {product.map(product => <ProductItem key={product.id} product={product}/>)}
    </Row>);
});

export default ProductList;