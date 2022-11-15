import React from 'react';
import {observer} from "mobx-react-lite";
import ProductItem from "./ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../store/ProductStore";


const ProductList = observer(({}) => {
    const dispatch = useDispatch()
    const getProduct = () => {
        dispatch(getProducts())
    }
    getProduct()
    const productState = useSelector(state => state.products)
    return (<div style={{display: 'flex'}}>
        {productState.products.map(product => <ProductItem key={product.id} product={product}/>)}
    </div>);
});

export default ProductList;