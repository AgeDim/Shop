import React from 'react';
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";
import {getProducts} from "../store/ProductStore";

// const products = getProducts()
const ProductList = observer(({}) => {
    const productState = useSelector(state => state.products)
    return (<div style={{display: 'flex'}}>
        {productState.products.map(product => <ProductItem key={product.id} product={product}/>)}
    </div>);
});

export default ProductList;