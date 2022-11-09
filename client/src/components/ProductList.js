import React from 'react';
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";

const ProductList = observer(({}) => {
    const productState = useSelector(state => state.products)
    return (<div style={{display: 'flex'}}>
        {productState.products.map(product => <ProductItem key={product.id} product={product}/>)}
    </div>);
});

export default ProductList;