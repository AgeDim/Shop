import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import {getProductByType} from "../http/productAPI";


const ProductList = observer(({}) => {
    const {product} = useContext(Context)
    let type = product.selectedType
    const getProducts = () => {
        getProductByType(product, type.name)
    }
    return (<Row className="me-auto" style={{display: 'flex'}}>
        {product.products.map(product => <ProductItem key={product.id} product={product}/>)}
    </Row>);
});

export default ProductList;